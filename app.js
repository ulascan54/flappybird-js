let block = document.getElementById('block')
let hole = document.getElementById('hole')
let character=document.getElementById('character')
let jumping = 0
let counter=0
var audio = document.getElementById("audio1");
var btn = document.getElementById("btnPause");



function PausePlay() {
    if (audio.paused) {
        audio.play();
        btn.value = "Pause";
    } else if (audio.ended) {
        audio.currentTime = 0;
        audio.play();
        btn.value = "Pause";
    }
    else {
        audio.pause();
        btn.value = "Play";
    }
} 
document.addEventListener('keydown',(e)=>{
    if(e.keyCode==32){
        jump()
    }
})


hole.addEventListener('animationiteration',()=>{
    var random = Math.random()*3;
    var top = (random*100)+150
    hole.style.top = -(top) + "px";
    counter++
})

setInterval(function(){
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'))
        if(jumping == 0){
            character.style.top=(characterTop+3)+"px"
        }
        var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
        var holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
        var cTop = -(500-characterTop);
        if((characterTop>480)||((blockLeft<20)&&(blockLeft>-50)&&((cTop<holeTop)||(cTop>holeTop+130)))){
            alert("Game over. Score: "+(counter-1));
            character.style.top = 100 + "px";
            counter=0;
        }
},10)

html.addEventListener('keydown',space(e))
function space(e){
    if(e.keyCode===32){
        jump()
    }
}

function jump(){
 jumping = 1
 let jumpCount = 0
    let jumpInterval = setInterval(function(){
                let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'))
                if((characterTop>6) && (jumpCount<15)){
                    character.style.top=(characterTop-5)+"px"
                }
                if(jumpCount>20){
                    clearInterval(jumpInterval)
                jumping = 0
                jumpCount=0
                }
        jumpCount++
    },10)
}
