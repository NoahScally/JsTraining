
const ball = document.getElementById('ball');
let curX = 100;
let curY = 100;
let targX = curX;
let targY = curY;
let moving = false;

function startMoving(){
    moving = !moving;
    if(moving){pickNewTarget();}
}
function pickNewTarget(){
    const maxX = window.innerWidth-ball.offsetWidth;
    const maxY = window.innerHeight-ball.offsetHeight;
    
    targX = Math.random() * maxX;
    targY = Math.random() *maxY;
}

function animateBall(){
    if (moving){
        //smooth moving speed
        const speed = 0.05;
        curX += (targX-curX) * speed;
        curY += (targY-curY) * speed;
        //allows us to access the css element ball and change its position
        ball.style.left = curX + "px";
        ball.style.top = curY + "px";

        const distance = Math.hypot(targX - curX, targY - curY);
    if( distance < 1){pickNewTarget();}
    }
    requestAnimationFrame(animateBall);
}
function youWin(){
    if(!moving){document.getElementById('gameText').textContent = `you win!`};
        setTimeout(() => {
            console.log("restarting game...");
            document.getElementById('gameText').textContent = `Catch me if you can!`;
    }, 2000); // delay in milliseconds
}
animateBall();

ball.addEventListener('click', ()=>{startMoving(); youWin();} );
