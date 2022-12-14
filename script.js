const wordContainer = document.getElementById('wordContainer')
const startButton = document.getElementById('startButton')
const usedLetter = document.getElementById('usedLetters')

const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
ctx.canvas.width = 0
ctx.canvas.height = 0

const bodyParts = [
    [4,2,1,1],
    [4,3,1,2],
    [3,5,1,1],
    [5,5,1,1],
    [3,3,1,1],
    [5,3,1,1],
]

let selectedWord;
let letter;
let mistake;
let hits;

const startGame = () => {
    letter = []
    mistake = 0
    hits = 0
    wordContainer.innerHTML = ''
    usedLetter.innerHTML = ''
    startButton.style.display = 'none'
    drawHangMan()
}

startButton.addEventListener('click', startGame)

const drawHangMan = () => {
    ctx.canvas.width = 120
    ctx.canvas.height = 160
    ctx.scale(20, 20)
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = '#d95d39'
    ctx.fillRect(0, 7, 4, 1)
    ctx.fillRect(1, 0, 1, 8)
    ctx.fillRect(2, 0, 3, 1)
    ctx.fillRect(4, 1, 1, 1)
}