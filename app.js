const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.getElementById('time-left')
const score =document.getElementById('score')
let allowedTime = 10
let result = 0
let hitPosition

squares.forEach( square => {
    square.addEventListener('mousedown', ()=> {
        if(square.id == hitPosition){
            result++
            score.textContent = result
            hitPosition = null
            score.classList.add('text-danger')
        }else{
            score.classList.remove('text-danger')
        }
        
    })
})
const randomSquare = () => {
    squares.forEach(square=>{
        square.classList.remove('mole')
    })

    let randomSquare = squares[Math.floor(Math.random() * 9)]
    randomSquare.classList.add('mole')
    hitPosition = randomSquare.id
}
const moveMole = () => {
    let timerId = setInterval(randomSquare,500)
}

const countDown = () => {
   allowedTime--
   timeLeft.innerHTML = allowedTime
   if(allowedTime == 0){
    clearInterval(countDownTimer)
    alert('Game Over! Final Score is '+result)
   }

       
}
let countDownTimer = setInterval(countDown,1000)
moveMole()
randomSquare()