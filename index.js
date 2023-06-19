var lst=document.querySelectorAll(".drum");
for(var i=0;i<lst.length;i++){
    lst[i].addEventListener("click",function(){
        var key=this.innerHTML;
        sound(key);
        animate(key);
    });
}

document.addEventListener("keypress",function(event){
    var key=event.key;
    sound(key);
    animate(key);
});

function sound(key){
    switch (key) {
        case "w":
            audio=new Audio("./sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            audio=new Audio("./sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            audio=new Audio("./sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            audio=new Audio("./sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            audio=new Audio("./sounds/snare.mp3");
            audio.play();
            break;
        case "k":
            audio=new Audio("./sounds/crash.mp3");
            audio.play();
            break;
        case "l":
            audio=new Audio("./sounds/kick-bass.mp3");
            audio.play();
            break;
        default:
            break;
    }
}

function animate(currentKey){
    var btn=document.querySelector("."+currentKey);
    btn.classList.add("pressed");
    setTimeout(function(){
        btn.classList.remove("pressed");
    },100);
}