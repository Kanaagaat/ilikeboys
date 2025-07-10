musics = [
    "sounds/green.mp3",
    "sounds/red.mp3",
    "sounds/yellow.mp3",
    "sounds/blue.mp3",
    "sounds/wrong.mp3"
]
function pressButton(){
    $(".btn").click(function(){
        let btn = $(this).attr("id");
        userClickedPattern.push(btn);
        var audio = new Audio("./sounds/" + btn + ".mp3");
        audio.play();
        
        $("#" + btn).addClass("pressed");
        setTimeout(function() {
            $("#" + btn).removeClass("pressed")
        }, 100)

        checkAnswer(userClickedPattern.length - 1);
    });
    
}

function nextSequence(){
    let randomNumber = Math.floor(Math.random() * 4) ;
    level++;
    return randomNumber;
}

function GameSound(name){
    var audio = new Audio("./sounds/" + name + ".mp3");
    audio.play();
    $("#" + name).addClass("pressed");
    setTimeout(function() {
        $("#" + name).removeClass("pressed")
    }, 100);
}

function checkAnswer(currentLevel){
    if(userClickedPattern[currentLevel] === gamePattern[currentLevel]){
        if(userClickedPattern.length === gamePattern.length){
            setTimeout(() => {
                game();
            }, 1000);
        }
    } else {
        var audio = new Audio(musics[4]); // wrong.mp3
        audio.play();
        $("body").addClass("game-over");
        setTimeout(() => $("body").removeClass("game-over"), 200);
        $("#level-title").text("Game Over, Press A to Restart");

        startOver();
    }
}
function startOver(){
    level = 0;
    gamePattern = [];
    userClickedPattern = [];
}

function game(){
  
    randomNumber = nextSequence();
    randomChosenColour = buttonColour[randomNumber];
    gamePattern.push(randomChosenColour);
    for(var i = 0; i<gamePattern.length; i++){
        GameSound(gamePattern[i]);
         setTimeout(function () {
           
        }, 1000);
    }
    // GameSound(randomChosenColour,randomNumber);
    $("#level-title").text("Level: " + level) ;
   
    
   
}




var userClickedPattern = [];
var gamePattern = [];
var buttonColour = ["green", "red", "yellow", "blue"];
var randomChosenColour;
var level =1;



$(document).on("keypress", function(event){
    console.log(event.key)
    if(event.key == "A"){
        startOver();
        game();
    }
    
})

pressButton();









