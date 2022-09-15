const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');
const over = document.querySelector('.over');
const button = document.querySelector('.retry');

const jump = () => {
  mario.classList.add('jump');

  setTimeout(()=> {
    mario.classList.remove('jump');
  }, 500);
}

const loop = setInterval(()=> {

  const pipePosition = pipe.offsetLeft;
  const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
  const cloudsPosition = clouds.offsetLeft;
  
  if(pipePosition <= 122 && pipePosition > 0 && marioPosition < 90 ) {

    pipe.style.animation = 'none';
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = 'none';
    mario.style.bottom = `${marioPosition}px`;

    mario.src = "./game-over.png";
    mario.style.width = "75px";
    mario.style.marginLeft = "50px";

    clouds.style.animation = 'none';
    clouds.style.left = `${cloudsPosition}px`;

    over.style.display = "inline";

    button.style.display = "inline";

    clearInterval(loop);
  }
}, 10)


document.addEventListener('keydown', jump);

var btn = document.querySelector("#refresh");

btn.addEventListener("click", function() {
    
    location.reload();

});