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
        } else if(turn===false&&this.classList.contains("blue")){
            alert("box is already blue");
        } else if(turn===false&&this.classList.contains("red")){
            alert("box is already red");
        } else if(turn===false&&this.classList.contains("white")){
            this.classList.remove("white");
            this.classList.add("red");
            this.innerHTML = ("O")
            turn=true;
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
        blueScoreScreen.innerHTML = (blueScore);
    } 
    else if((boxes[0].classList.contains("red")&&boxes[1].classList.contains("red")&&boxes[2].classList.contains("red"))||(boxes[3].classList.contains("red")&&boxes[4].classList.contains("red")&&boxes[5].classList.contains("red"))||(boxes[6].classList.contains("red")&&boxes[7].classList.contains("red")&&boxes[8].classList.contains("red"))||(boxes[0].classList.contains("red")&&boxes[3].classList.contains("red")&&boxes[6].classList.contains("red"))||(boxes[1].classList.contains("red")&&boxes[4].classList.contains("red")&&boxes[7].classList.contains("red"))||(boxes[2].classList.contains("red")&&boxes[5].classList.contains("red")&&boxes[8].classList.contains("red"))||(boxes[0].classList.contains("red")&&boxes[4].classList.contains("red")&&boxes[8].classList.contains("red"))||(boxes[2].classList.contains("red")&&boxes[4].classList.contains("red")&&boxes[6].classList.contains("red"))){
        resultScreen.innerHTML = ("Red wins");
        resultScreen.classList.add("red");
        redScore++;
        redScoreScreen.innerHTML = (redScore);
    }
    else if((boxes[0].classList.contains("blue")||boxes[0].classList.contains("red"))&&(boxes[1].classList.contains("blue")||boxes[1].classList.contains("red"))&&(boxes[2].classList.contains("blue")||boxes[2].classList.contains("red"))&&(boxes[3].classList.contains("blue")||boxes[3].classList.contains("red"))&&(boxes[4].classList.contains("blue")||boxes[4].classList.contains("red"))&&(boxes[5].classList.contains("blue")||boxes[5].classList.contains("red"))&&(boxes[6].classList.contains("blue")||boxes[6].classList.contains("red"))&&(boxes[7].classList.contains("blue")||boxes[7].classList.contains("red"))&&(boxes[8].classList.contains("blue")||boxes[8].classList.contains("red"))){
        resultScreen.innerHTML = ("Draw");
        turnScreen.classList.add("text-center");
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
    resultScreen.innerHTML= "";
    resultScreen.classList.remove("blue", "red");
}

function resetScore(){
    redScore = 0;
    blueScore = 0;
    redScoreScreen.innerHTML = redScore;
    blueScoreScreen.innerHTML = blueScore;
}

function turnBox(){
    if(turn===true){
        turnScreen.innerHTML = ("Player One's Turn");
        turnScreen.classList.add("text-center", "blue");
    }else if(turn===false){
        turnScreen.classList.remove("blue");
        turnScreen.innerHTML = ("Player Two's Turn");
        turnScreen.classList.add("text-center", "red");
    }
}