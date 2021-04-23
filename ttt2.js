var boxes = document.querySelectorAll(".box");

let turnScreen = document.getElementById("turnScreen");
let turn = true;

let resultScreen = document.getElementById("resultScreen");
let blueScoreScreen = document.getElementById("blueScore");
let redScoreScreen = document.getElementById("redScore")
var blueScore = 0;
var redScore = 0;

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
        //setTimeout(comTurn, 500);
    })
})

function checkWins(){
    if((boxes[0].classList.contains("blue")&&boxes[1].classList.contains("blue")&&boxes[2].classList.contains("blue"))||(boxes[3].classList.contains("blue")&&boxes[4].classList.contains("blue")&&boxes[5].classList.contains("blue"))||(boxes[6].classList.contains("blue")&&boxes[7].classList.contains("blue")&&boxes[8].classList.contains("blue"))||(boxes[0].classList.contains("blue")&&boxes[3].classList.contains("blue")&&boxes[6].classList.contains("blue"))||(boxes[1].classList.contains("blue")&&boxes[4].classList.contains("blue")&&boxes[7].classList.contains("blue"))||(boxes[2].classList.contains("blue")&&boxes[5].classList.contains("blue")&&boxes[8].classList.contains("blue"))||(boxes[0].classList.contains("blue")&&boxes[4].classList.contains("blue")&&boxes[8].classList.contains("blue"))||(boxes[2].classList.contains("blue")&&boxes[4].classList.contains("blue")&&boxes[6].classList.contains("blue"))){
        resultScreen.innerHTML = ("Blue wins");
        blueScore++;
        blueScoreScreen.innerHTML = (blueScore);
        resetBox();
    }
    else if((boxes[0].classList.contains("blue")||boxes[0].classList.contains("red"))&&(boxes[1].classList.contains("blue")||boxes[1].classList.contains("red"))&&(boxes[2].classList.contains("blue")||boxes[2].classList.contains("red"))&&(boxes[3].classList.contains("blue")||boxes[3].classList.contains("red"))&&(boxes[4].classList.contains("blue")||boxes[4].classList.contains("red"))&&(boxes[5].classList.contains("blue")||boxes[5].classList.contains("red"))&&(boxes[6].classList.contains("blue")||boxes[6].classList.contains("red"))&&(boxes[7].classList.contains("blue")||boxes[7].classList.contains("red"))&&(boxes[8].classList.contains("blue")||boxes[8].classList.contains("red"))){
        resultScreen.innerHTML = ("Draw");
        turnScreen.classList.add("text-center");
        
        
        //resetBox();
    }
    else{
        setTimeout(comTurn, 750);
    }
}

function checkComWins(){
    if((boxes[0].classList.contains("red")&&boxes[1].classList.contains("red")&&boxes[2].classList.contains("red"))||(boxes[3].classList.contains("red")&&boxes[4].classList.contains("red")&&boxes[5].classList.contains("red"))||(boxes[6].classList.contains("red")&&boxes[7].classList.contains("red")&&boxes[8].classList.contains("red"))||(boxes[0].classList.contains("red")&&boxes[3].classList.contains("red")&&boxes[6].classList.contains("red"))||(boxes[1].classList.contains("red")&&boxes[4].classList.contains("red")&&boxes[7].classList.contains("red"))||(boxes[2].classList.contains("red")&&boxes[5].classList.contains("red")&&boxes[8].classList.contains("red"))||(boxes[0].classList.contains("red")&&boxes[4].classList.contains("red")&&boxes[8].classList.contains("red"))||(boxes[2].classList.contains("red")&&boxes[4].classList.contains("red")&&boxes[6].classList.contains("red"))){
        resultScreen.innerHTML = ("COM wins");
        redScore++;
        redScoreScreen.innerHTML = (redScore);
        resetBox();
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
}

function turnBox(){
    if(turn===true){
        turnScreen.innerHTML = ("Player One's Turn");
        turnScreen.classList.add("text-center", "blue");
        //turnScreen.innerClass.remove("red");
    }else if(turn===false){
        turnScreen.classList.remove("blue");
        turnScreen.innerHTML = ("COM's Turn");
        turnScreen.classList.add("text-center", "red");
    }
}