const wordContainer = document.getElementById('wordContainer')
const startButton = document.getElementById('startButton')
const usedLetter = document.getElementById('usedLetters')

const canvas = document.getElementById('canvas')
const ctx = document.getContext('2d')
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

let selectedWord
let letter
let mistake
let hits

startButton.addEventListener('click', startGame)

const startGame = () => {
    letter = []
    mistake = 0
    hits = 0
    wordContainer.innerHTML = ''
    usedLetter.innerHTML = ''
    startButton.style.display = 'none'
}