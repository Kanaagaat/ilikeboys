function nextsequences(){
    let randomNumber = Math.floor(Math.random() * 4);
    randomChosenColour = buttonColours[randomNumber];
    playSound(randomChosenColour);
    animatePress(randomChosenColour)
    gameColor = randomChosenColour;
    gamePattern.push(randomChosenColour);
    level = level + 1;
}

function playSound(name){
    let audio = new Audio("./sounds/" +  name + ".mp3");
    audio.play();

}

function animatePress(btn){
    $("." + btn).addClass("pressed");
    setTimeout(function(){
         $("." + btn).removeClass("pressed");
    }, 100);
}

function checkAnswer(currentlevel){
    if(gamePattern[currentlevel] == userClickedPattern[currentlevel]){
        if(JSON.stringify(gamePattern) == JSON.stringify(userClickedPattern)){
            userClickedPattern = [];
            $("#level-title").text("Level " + level); 
            setTimeout(nextsequences, 1000);
            return true;
        }
    }
    else{
         gameOver();
         startOver();
    }
    

}

function gameOver(){
    $("body").addClass("game-over");
    playSound("wrong");
    $("h1").text("Game Over, Press Any Key to Restart");
    setTimeout(function(){
        $("body").removeClass("game-over");
    },200);
}

function startOver(){
    level = 0;
    gamePattern = [];
    started = true;
    userClickedPattern = []
}

var buttonColours =  ["red", "blue", "green", "yellow"];
var randomChosenColour;
var gamePattern = [];
var gameColor;
var userClickedPattern = []; 
var level = 0;
var started = true;


$(".btn").click(function(){
    let btn = $(this).attr(
        
        "id");
    animatePress(btn);
    playSound(btn);
    userClickedPattern.push(btn);
    checkAnswer(userClickedPattern.length - 1);
  
    console.log(userClickedPattern)
    

   
});




$(document).on("keypress", function(event){
    if(event.key == "A" || event.key == "a"){
        if(started){
            nextsequences();
            started = false;
        }
       
    }
    
    
})

