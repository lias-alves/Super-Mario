const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const game = document.querySelector('.game');
const butao = document.querySelector('.butao')

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump')
    }, 500);
}

const loop = setInterval(() => {

    console.log('loop')
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    console.log(marioPosition)
    
    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
       
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './images/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px'

        game.style.display = 'flex';

        clearInterval(loop);
    }
}, 10)

butao.addEventListener('click', function() {
    location.reload();
});


document.addEventListener('keydown', jump);  
document.addEventListener('touchstart', jump); 
