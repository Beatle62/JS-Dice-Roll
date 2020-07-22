const diceTriggerEl = document.querySelector(".dice__trigger");
const diceImageEl = document.querySelector(".dice__image");


function randomNumber(){
 return 1 + Math.floor(Math.random()*6);
}

function diceRoll(){
    diceTriggerEl.addEventListener("click",function(){
        let myRandomNumber = randomNumber();
        diceImageEl.src = 'images/dice' + myRandomNumber + '.png';
        diceImageEl.classList.toggle("change");
        
    })
} 

diceRoll();



