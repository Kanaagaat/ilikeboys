var dices = [
    "images/dice1.png",
    "images/dice2.png",
    "images/dice3.png",
    "images/dice4.png",
    "images/dice5.png",
    "images/dice6.png",
];




    var p1, p2;
    p1 = Math.round(Math.random() * 5);
    p2 = Math.round(Math.random() * 5);
    
    document.querySelector(".pl1").setAttribute("src", dices[p1]);
    document.querySelector(".pl2").setAttribute("src", dices[p2]);
    if(p1 > p2){
        document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
    }
    else if(p2 > p1){
        document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
    }
    else if(p1 === p2){
        document.querySelector("h1").innerHTML = "Draw!";
    }
    

