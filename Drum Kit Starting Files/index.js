for(var i=0; i<7; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", drum);

}


function drum(){
    // var audio = new Audio(musics[3]);
    // audio.play();   

    keyPress(this.innerHTML);
    buttonAnimation(this.innerHTML)
}
musics = [
    "sounds/crash.mp3",
    "sounds/kick-bass.mp3",
    "sounds/snare.mp3",
    "sounds/tom-1.mp3",
    "sounds/tom-2.mp3",
    "sounds/tom-3.mp3",
    "sounds/tom-4.mp3"
];


document.addEventListener("keypress",function(event){
    keyPress(event.key);
    buttonAnimation(event.key)
} )


function keyPress(key){
    switch(key){
        case "w":
            var tom1 = new Audio(musics[3]);
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio(musics[4]);
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio(musics[5]);
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio(musics[6]);
            tom4.play();
            break;

        case "j":
            var snare = new Audio(musics[2]);
            snare.play();
            break;

        case "k":
            var crash = new Audio(musics[0]);
            crash.play();
            break;
        case "l":
            var kick = new Audio(musics[1]);
            kick.play();
            break;

        default:
    }
    
    
}

function buttonAnimation(key){

    document.querySelector("." + key).classList.add("pressed")
    setTimeout(function(){
        document.querySelector("." + key).classList.remove("pressed")
    }, 100);
}