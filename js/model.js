
let changeGame = Math.trunc(Math.random() * 10) + 1;
let counter = 10;

// document.querySelector('.guessing').textContent = changeGame;

document.querySelector('.guess-play').addEventListener('click', function(){

    let userInput = Number(document.querySelector('.user-input').value);


    if(!userInput){
        document.querySelector('.result-info').textContent = 'Invalid Input! Try again';
    }
    else if(userInput > changeGame){

        if(counter > 1){
            document.querySelector('.result-info').textContent = 'Too High! Try again';
            counter--;
            document.querySelector('.counter').textContent = counter;
            document.querySelector('.counter1').textContent = counter;
        }else{
            document.querySelector('.result-info').textContent = '🔥🔥🔥 Game Over';
            document.querySelector('.counter').textContent = 0;
            document.querySelector('.counter1').textContent = 0;
        }

        
    }
    else if(userInput < changeGame){

        if(counter > 1){
            document.querySelector('.result-info').textContent = 'Too Low! Try again';
            counter--;
            document.querySelector('.counter').textContent = counter;
            document.querySelector('.counter1').textContent = counter;
        }else{
            document.querySelector('.result-info').textContent = '🔥🔥🔥 Game Over';
            document.querySelector('.counter').textContent = 0;
            document.querySelector('.counter1').textContent = 0;
        }
        
    }
    else if(userInput === changeGame){
        document.querySelector('.result-info').textContent = '🎉🎉🎉 You Win';
        document.querySelector('.result').style.backgroundColor =  '#00b300';
    }



});