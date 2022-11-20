function randomDice(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function startGame(){
    var dice1 = randomDice(1,6);
    var dice2 = randomDice(1,6);
    var image1 = document.getElementById('img1');
    var image2 = document.getElementById('img2');

    image1.src = "./images/dice"+ dice1 +".png"
    image2.src = "./images/dice"+ dice2 +".png"

    if((dice1 > dice2) && (dice1 != dice2)){
        document.getElementById('title').innerHTML= "Player1 beats Player2";
    }else if((dice1 < dice2) && (dice1 != dice2)){
        document.getElementById('title').innerHTML= "Player2 beats Player1";
    }else{
        document.getElementById('title').innerHTML= "Draw!";
    }
}

window.onload = startGame();