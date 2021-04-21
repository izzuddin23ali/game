var boxes = document.querySelectorAll(".box");

var turnScreen = document.getElementById("turnScreen");

let turn = true;

boxes.forEach(function(box){
    box.addEventListener("click", function(){
        if(turn===true&&this.classList.contains("blue")){
            alert("box is already blue");
        } else if(turn===true&&this.classList.contains("red")){
            alert("box is already red");
        } else if(turn===true&this.classList.contains("white")){
            this.classList.remove("white");
            this.classList.add("blue");
            turn=false;
        } else if(turn===false&&this.classList.contains("blue")){
            alert("box is already blue");
        } else if(turn===false&&this.classList.contains("red")){
            alert("box is already red");
        } else if(turn===false&&this.classList.contains("white")){
            this.classList.remove("white");
            this.classList.add("red");
            turn=true;
        }
        checkWins();
    })
})

function checkWins(){
    if((boxes[0].classList.contains("blue")&&boxes[1].classList.contains("blue")&&boxes[2].classList.contains("blue"))||(boxes[3].classList.contains("blue")&&boxes[4].classList.contains("blue")&&boxes[5].classList.contains("blue"))||(boxes[6].classList.contains("blue")&&boxes[7].classList.contains("blue")&&boxes[8].classList.contains("blue"))||(boxes[0].classList.contains("blue")&&boxes[3].classList.contains("blue")&&boxes[6].classList.contains("blue"))||(boxes[1].classList.contains("blue")&&boxes[4].classList.contains("blue")&&boxes[7].classList.contains("blue"))||(boxes[2].classList.contains("blue")&&boxes[5].classList.contains("blue")&&boxes[8].classList.contains("blue"))||(boxes[0].classList.contains("blue")&&boxes[4].classList.contains("blue")&&boxes[8].classList.contains("blue"))||(boxes[2].classList.contains("blue")&&boxes[4].classList.contains("blue")&&boxes[6].classList.contains("blue"))){
        alert("blue wins");
        resetBox();
    } 
    else if((boxes[0].classList.contains("red")&&boxes[1].classList.contains("red")&&boxes[2].classList.contains("red"))||(boxes[3].classList.contains("red")&&boxes[4].classList.contains("red")&&boxes[5].classList.contains("red"))||(boxes[6].classList.contains("red")&&boxes[7].classList.contains("red")&&boxes[8].classList.contains("red"))||(boxes[0].classList.contains("red")&&boxes[3].classList.contains("red")&&boxes[6].classList.contains("red"))||(boxes[1].classList.contains("red")&&boxes[4].classList.contains("red")&&boxes[7].classList.contains("red"))||(boxes[2].classList.contains("red")&&boxes[5].classList.contains("red")&&boxes[8].classList.contains("red"))||(boxes[0].classList.contains("red")&&boxes[4].classList.contains("red")&&boxes[8].classList.contains("red"))||(boxes[2].classList.contains("red")&&boxes[4].classList.contains("red")&&boxes[6].classList.contains("red"))){
        alert("red wins");
        resetBox();
    }
    else if((boxes[0].classList.contains("blue")||boxes[0].classList.contains("red"))&&(boxes[1].classList.contains("blue")||boxes[1].classList.contains("red"))&&(boxes[2].classList.contains("blue")||boxes[2].classList.contains("red"))&&(boxes[3].classList.contains("blue")||boxes[3].classList.contains("red"))&&(boxes[4].classList.contains("blue")||boxes[4].classList.contains("red"))&&(boxes[5].classList.contains("blue")||boxes[5].classList.contains("red"))&&(boxes[6].classList.contains("blue")||boxes[6].classList.contains("red"))&&(boxes[7].classList.contains("blue")||boxes[7].classList.contains("red"))&&(boxes[8].classList.contains("blue")||boxes[8].classList.contains("red"))){
        turnScreen.innerHTML = ("Draw");
        turnScreen.classList.add("text-center");
        
        
        //resetBox();
    }
}

function resetBox(){
    for(i=0; i<boxes.length; i++){
        boxes[i].classList.remove("blue", "red");
        boxes[i].classList.add("white");
    }
    turn = true;
}

/*

if(turn===true){
    turnScreen.innerHTML = ("Player One's Turn");
    turnScreen.classList.add("text-center", "blue");
} else if(turn===false){
    turnScreen.innerHTML = ("Player Two's Turn");
    turnScreen.classList.add("text-center", "red");
}

*/

do{
    turnScreen.innerHTML.remove("red")
    turnScreen.innerHTML = ("Player One's Turn");
    turnScreen.classList.add("text-center", "blue");
}
while(turn===true);

do{
    turnScreen.classList.remove("blue");
    turnScreen.innerHTML = ("Player Two's Turn");
    turnScreen.classList.add("text-center", "red");
}
while(turn===false);