      let result = ' ';
      let machineMove = '';
      let wins = 0, losses = 0, ties = 0;
      let randomNumber = 0;
      //functions
      function upDateResult(){
        document.getElementById("result").textContent = `you ${result}`;
        document.getElementById("scoreboard").textContent = `wins: ${wins} , ties:${ties} , losses: ${losses}`;
      }

      function playGame(playerMove){
        machMove();
        if (playerMove=='rock'){
            if(machineMove==='rock'){
            result = 'tie';
            ties++;
          }
          else if(machineMove==='paper') {
            result = 'lose';
            losses++;
          }
          else{
            result = 'win';
            wins++;
          }
        }
        else if(playerMove=='paper'){
          if(machineMove==='paper'){
            result = 'tie';
            ties++;
          }
          else if(machineMove==='scissors') {
            result = 'lose';
            losses++;
          }
          else{
            result = 'win';
            wins++;
          }
        }
        else{
            if(machineMove==='scissors'){
            result = 'tie';
            ties++;
          }
          else if(machineMove==='rock') {
            result = 'lose';
            losses++;
          }
          else{
            result = 'win';
            wins++;
          }
        }
        console.log(result);
        upDateResult();
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
      