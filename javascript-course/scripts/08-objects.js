
let result = ' ';
let machineMove = '';
let randomNumber = 0;


//functions

function playGame(playerMove){
machMove();
if (playerMove=='rock'){
    if(machineMove==='rock'){
    score.ties++;
    score.result = 'tie';
    }
    else if(machineMove==='paper') {
    score.losses++;
    score.result = 'lose';
    }
    else{
    score.wins++;
    score.result = 'win';
    }
}
else if(playerMove=='paper'){
    if(machineMove==='paper'){
    score.ties++;
    score.result = 'tie';
    }
    else if(machineMove==='scissors') {
    score.losses++;
    score.result = 'lose';
    }
    else{
    score.wins++;
    score.result = 'win';
    }
}
else{
    if(machineMove==='scissors'){
    score.ties++;
    score.result = 'tie';
    }
    else if(machineMove==='rock') {
    score.losses++;
    score.result = 'lose';
    }
    else{
    score.wins++;
    score.result = 'win';
    }
}
console.log(result);
report();
localStorage.setItem('score', JSON.stringify(score));

return;
}
function machMove(){
randomNumber = Math.random();
if(randomNumber < (1/3)){
    machineMove = 'rock';
}
else if(randomNumber < (2/3)){  
    machineMove = 'paper';
}
else{
    machineMove = 'scissors';
}
return machineMove;
}
// parsing our JSON string and storing it in SCORE object; also using default operator


//local storage setup, works with key value pair, both are strings
let score = JSON.parse(localStorage.getItem('score')) || {
  result: '',
  wins: 0,
  ties: 0,
  losses: 0
};

function report() {
    document.getElementById("result").textContent = `you ${score.result}`;
    document.getElementById("scoreboard").textContent = `wins: ${score.wins} ties: ${score.ties} losses: ${score.losses}`;
}
console.log(localStorage.getItem('score'));

// simple object
const obj1 = {
message: 'hello',
atribute2: 'hey'
};
//called destructing, we make a variable message, and get the message attribute from obj1 at the same time, storing it at the variable.
const {message} = obj1; 
