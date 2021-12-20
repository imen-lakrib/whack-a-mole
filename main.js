// select all the elements and add them to a const
const square = document.querySelectorAll('.square')
const mole = document.querySelectorAll('.mole')
const timeLeft = document.querySelector('#time-left')
let score = document.querySelector('#score')
    // to start the game lets make thr result starting by o
let result = 0
let currentTime = timeLeft.textContent

// select one grid randomly and make it on a function
function randomSquare() {
    //remove mole image from all the square's class using classList
    square.forEach(className => {
            className.classList.remove('mole')
        })
        // we defind a random position to add mole class on it 
    let randomPosition = square[Math.floor(Math.random() * 9)]
    randomPosition.classList.add('mole')
        // we need randomposition id in a var "hitposition" to use it later
    hitPosition = randomPosition.id
}
// for each id on square (1-9)add evente onmouseup 
// if id = hitposition then ass +1 to score
square.forEach(id => {
    id.addEventListener('mouseup', () => {
        if (id.id === hitPosition) {
            result++
            score.textContent = result
        }
    })
})

// move the mole each 10s , make this value on timerId
function moveMole() {
    let timerId = null
    timerId = setInterval(randomSquare, 1000)
}
// cal the function 
// moveMole()
// working on the score and how much time left 

// countDown function
function countDown() {
    currentTime-- // currentTime => show the time then -1 .. loop
    timeLeft.textContent = currentTime
        // to remove showing mole when game is overd
    if (currentTime === 0) {
        clearInterval(timerId)
        alert('game over .. your score :' + result)
    }

}
let timerId = setInterval(countDown, 1000)
    // call the function 
moveMole()