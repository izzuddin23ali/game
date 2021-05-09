var boxes = document.querySelectorAll(".box");

let turnScreen = document.getElementById("turnScreen");
let turn = true;

let resultScreen = document.getElementById("resultScreen");
let blueScoreScreen = document.getElementById("blueScore");
let redScoreScreen = document.getElementById("redScore")
var blueScore = 0;
var redScore = 0;

let blueWin=false;

let blueOverlay = document.getElementById("blueOverlay");
let redOVerlay = document.getElementById("redOverlay");
let drawOverlay = document.getElementById("drawOverlay");

turnScreen.classList.add("text-center", "blue");
turnScreen.innerHTML = ("Player One's Turn");

boxes.forEach(function(box){
    box.addEventListener("click", function(){
        if(turn===true&&this.classList.contains("blue")){
            alert("box is already blue");
        } else if(turn===true&&this.classList.contains("red")){
            alert("box is already red");
        } else if(turn===true&this.classList.contains("white")){
            this.classList.remove("white");
            this.classList.add("blue");
            this.innerHTML = ("X")
            turn=false;
        }
        turnBox();
        checkWins();
    })
})

function checkWins(){
    if((boxes[0].classList.contains("blue")&&boxes[1].classList.contains("blue")&&boxes[2].classList.contains("blue"))||(boxes[3].classList.contains("blue")&&boxes[4].classList.contains("blue")&&boxes[5].classList.contains("blue"))||(boxes[6].classList.contains("blue")&&boxes[7].classList.contains("blue")&&boxes[8].classList.contains("blue"))||(boxes[0].classList.contains("blue")&&boxes[3].classList.contains("blue")&&boxes[6].classList.contains("blue"))||(boxes[1].classList.contains("blue")&&boxes[4].classList.contains("blue")&&boxes[7].classList.contains("blue"))||(boxes[2].classList.contains("blue")&&boxes[5].classList.contains("blue")&&boxes[8].classList.contains("blue"))||(boxes[0].classList.contains("blue")&&boxes[4].classList.contains("blue")&&boxes[8].classList.contains("blue"))||(boxes[2].classList.contains("blue")&&boxes[4].classList.contains("blue")&&boxes[6].classList.contains("blue"))){
        resultScreen.innerHTML = ("Blue wins");
        resultScreen.classList.add("blue");
        blueScore++;
        blueOverlay.style.display = ("flex");
        blueScoreScreen.innerHTML = (blueScore);
        blueWin=true;
    }
    else if((boxes[0].classList.contains("blue")||boxes[0].classList.contains("red"))&&(boxes[1].classList.contains("blue")||boxes[1].classList.contains("red"))&&(boxes[2].classList.contains("blue")||boxes[2].classList.contains("red"))&&(boxes[3].classList.contains("blue")||boxes[3].classList.contains("red"))&&(boxes[4].classList.contains("blue")||boxes[4].classList.contains("red"))&&(boxes[5].classList.contains("blue")||boxes[5].classList.contains("red"))&&(boxes[6].classList.contains("blue")||boxes[6].classList.contains("red"))&&(boxes[7].classList.contains("blue")||boxes[7].classList.contains("red"))&&(boxes[8].classList.contains("blue")||boxes[8].classList.contains("red"))){
        resultScreen.innerHTML = ("Draw");
        turnScreen.classList.add("text-center");
        drawOverlay.style.display = ("flex");
    }
    else{
        setTimeout(comTurn, 750);
    }
}

function checkComWins(){
    if((boxes[0].classList.contains("red")&&boxes[1].classList.contains("red")&&boxes[2].classList.contains("red"))||(boxes[3].classList.contains("red")&&boxes[4].classList.contains("red")&&boxes[5].classList.contains("red"))||(boxes[6].classList.contains("red")&&boxes[7].classList.contains("red")&&boxes[8].classList.contains("red"))||(boxes[0].classList.contains("red")&&boxes[3].classList.contains("red")&&boxes[6].classList.contains("red"))||(boxes[1].classList.contains("red")&&boxes[4].classList.contains("red")&&boxes[7].classList.contains("red"))||(boxes[2].classList.contains("red")&&boxes[5].classList.contains("red")&&boxes[8].classList.contains("red"))||(boxes[0].classList.contains("red")&&boxes[4].classList.contains("red")&&boxes[8].classList.contains("red"))||(boxes[2].classList.contains("red")&&boxes[4].classList.contains("red")&&boxes[6].classList.contains("red"))){
        resultScreen.innerHTML = ("COM wins");
        resultScreen.classList.add("red");
        redScore++;
        redScoreScreen.innerHTML = (redScore);
        redOverlay.style.display = ("flex");
    }
}

function randomNum(){
    return random = Math.floor(Math.random()*8);
}

function comTurn(){

    if(turn===false){

        let chosen = false;

        while(chosen === false){

            randomNum();
        
            if((boxes[random].classList.contains("red"))||(boxes[random].classList.contains("blue"))){
              chosen=false;
            }

            else if(boxes[random].classList.contains("white")){
                boxes[random].classList.remove("white");
                boxes[random].classList.add("red");
                boxes[random].innerHTML = ("O");
                chosen = true;
            }
        }

        turn = true;
        turnBox();
        checkComWins();
    }
}

function resetBox(){
    for(i=0; i<boxes.length; i++){
        boxes[i].classList.remove("blue", "red");
        boxes[i].classList.add("white");
        boxes[i].innerHTML = "";
    }
    turn = true;
    turnBox();
    resultScreen.innerHTML = "";
    resultScreen.classList.remove("red", "blue");
    redOverlay.style.display = ("none");
    blueOverlay.style.display = ("none");
    drawOverlay.style.display = ("none");
}

function resetScore(){
    redScore = 0;
    blueScore = 0;
    redScoreScreen.innerHTML = redScore;
    blueScoreScreen.innerHTML = blueScore;
}

function turnBox(){
    if(blueWin===true){
        turnScreen.innerHTML = ("Blue win");
        turnScreen.classList.add("text-center", "blue");
        return;
    }
    else if(blueWin===false){
        if(turn===true){
            turnScreen.innerHTML = ("Player One's Turn");
            turnScreen.classList.add("text-center", "blue");
        }else if(turn===false){
            turnScreen.classList.remove("blue");
            turnScreen.innerHTML = ("COM's Turn");
            turnScreen.classList.add("text-center", "red");
        }
    }
}



/*

function turnBox(){
    if(turn===true){
        turnScreen.innerHTML = ("Player One's Turn");
        turnScreen.classList.add("text-center", "blue");
    }else if(turn===false){
        turnScreen.classList.remove("blue");
        turnScreen.innerHTML = ("COM's Turn");
        turnScreen.classList.add("text-center", "red");
    }
}

*/