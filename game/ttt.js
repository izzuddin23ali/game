/*

var box1 = document.getElementById("box-1");
var box2 = document.getElementById("box-2");
var box3 = document.getElementById("box-3");
var box4 = document.getElementById("box-4");
var box5 = document.getElementById("box-5");
var box6 = document.getElementById("box-6");
var box7 = document.getElementById("box-7");
var box8 = document.getElementById("box-8");
var box9 = document.getElementById("box-9");

*/

var box = document.querySelectorAll(".box");

/*

var boxOne = document.getElementById("box-1");
var boxTwo = document.getElementById("box-2");
var boxThree = document.getElementById("box-3");
var boxFour = document.getElementById("box-4");
var boxFive = document.getElementById("box-5");
var boxSix = document.getElementById("box-6");
var boxSeven = document.getElementById("box-7");
var boxEight = document.getElementById("box-8");
var boxNine = document.getElementById("box-9");

*/

//var box = [boxOne, boxTwo, boxThree, boxFour, boxFive, boxSix, boxSeven, boxEight, boxNine];

var turnScreen = document.getElementById("turnScreen");

let turn = true;

/*
for(i=0; i<box.length; i++){
    box[i].addEventListener("click", function(){
        if(turn===true&&this.classList.contains("blue")){
            alert("box is already blue");
        } else if(turn==true&&this.classList.contains("red")){
            alert("box is already red");
        } else if(turn==true&&this.classList.contains("white")){
            this.classList.remove("white");
            this.classList.add("blue");
            turn = false;
        } else if(turn==false&&this.classList.contains("blue")){
            alert("box is already blue");
        } else if(turn==false&&this.classList.contains("red")){
            alert("box is already red");
        } else if(turn==false&&this.classList.contains("white")){
            this.classList.remove("white");
            this.classList.add("ref");
            turn=true;
        }
        checkWins();
    })
}
*/

box.forEach(function(){
    this.addEventListener("click", function(){
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

/*

box1.addEventListener("click", function(){
    if(turn===true&&box1.classList.contains("blue")){
        alert("box is already blue");
    } else if(turn===true&&box1.classList.contains("red")){
        alert("box is already red");
    } else if(turn===true&&box1.classList.contains("white")){
        box1.classList.remove("white");
        box1.classList.add("blue");
        turn = false;
    } else if(turn===false&&box1.classList.contains("blue")){
        alert("box is already blue");
    } else if(turn===false&&box1.classList.contains("red")){
        alert("box is already red");
    } else if(turn===false&&box1.classList.contains("white")){
        box1.classList.remove("white");
        box1.classList.add("red");
        turn = true;
    }
    checkWins();
})

box2.addEventListener("click", function(){
    if(turn===true&&box2.classList.contains("blue")){
        alert("box is already blue");
    } else if(turn===true&&box2.classList.contains("red")){
        alert("box is already red");
    } else if(turn===true&&box2.classList.contains("white")){
        box2.classList.remove("white");
        box2.classList.add("blue");
        turn = false;
    } else if(turn===false&&box2.classList.contains("blue")){
        alert("box is already blue");
    } else if(turn===false&&box2.classList.contains("red")){
        alert("box is already red");
    } else if(turn===false&&box2.classList.contains("white")){
        box2.classList.remove("white");
        box2.classList.add("red");
        turn = true;
    }
    checkWins();
})

box3.addEventListener("click", function(){
    if(turn===true&&box3.classList.contains("blue")){
        alert("box is already blue");
    } else if(turn===true&&box3.classList.contains("red")){
        alert("box is already red");
    } else if(turn===true&&box3.classList.contains("white")){
        box3.classList.remove("white");
        box3.classList.add("blue");
        turn = false;
    } else if(turn===false&&box3.classList.contains("blue")){
        alert("box is already blue");
    } else if(turn===false&&box3.classList.contains("red")){
        alert("box is already red");
    } else if(turn===false&&box3.classList.contains("white")){
        box3.classList.remove("white");
        box3.classList.add("red");
        turn = true;
    }
    checkWins();
})

box4.addEventListener("click", function(){
    if(turn===true&&box4.classList.contains("blue")){
        alert("box is already blue");
    } else if(turn===true&&box4.classList.contains("red")){
        alert("box is already red");
    } else if(turn===true&&box4.classList.contains("white")){
        box4.classList.remove("white");
        box4.classList.add("blue");
        turn = false;
    } else if(turn===false&&box4.classList.contains("blue")){
        alert("box is already blue");
    } else if(turn===false&&box4.classList.contains("red")){
        alert("box is already red");
    } else if(turn===false&&box4.classList.contains("white")){
        box4.classList.remove("white");
        box4.classList.add("red");
        turn = true;
    }
    checkWins();
})

box5.addEventListener("click", function(){
    if(turn===true&&box5.classList.contains("blue")){
        alert("box is already blue");
    } else if(turn===true&&box5.classList.contains("red")){
        alert("box is already red");
    } else if(turn===true&&box5.classList.contains("white")){
        box5.classList.remove("white");
        box5.classList.add("blue");
        turn = false;
    } else if(turn===false&&box5.classList.contains("blue")){
        alert("box is already blue");
    } else if(turn===false&&box5.classList.contains("red")){
        alert("box is already red");
    } else if(turn===false&&box5.classList.contains("white")){
        box5.classList.remove("white");
        box5.classList.add("red");
        turn = true;
    }
    checkWins();
})

box6.addEventListener("click", function(){
    if(turn===true&&box6.classList.contains("blue")){
        alert("box is already blue");
    } else if(turn===true&&box6.classList.contains("red")){
        alert("box is already red");
    } else if(turn===true&&box6.classList.contains("white")){
        box6.classList.remove("white");
        box6.classList.add("blue");
        turn = false;
    } else if(turn===false&&box6.classList.contains("blue")){
        alert("box is already blue");
    } else if(turn===false&&box6.classList.contains("red")){
        alert("box is already red");
    } else if(turn===false&&box6.classList.contains("white")){
        box6.classList.remove("white");
        box6.classList.add("red");
        turn = true;
    }
    checkWins();
})

box7.addEventListener("click", function(){
    if(turn===true&&box7.classList.contains("blue")){
        alert("box is already blue");
    } else if(turn===true&&box7.classList.contains("red")){
        alert("box is already red");
    } else if(turn===true&&box7.classList.contains("white")){
        box7.classList.remove("white");
        box7.classList.add("blue");
        turn = false;
    } else if(turn===false&&box7.classList.contains("blue")){
        alert("box is already blue");
    } else if(turn===false&&box7.classList.contains("red")){
        alert("box is already red");
    } else if(turn===false&&box7.classList.contains("white")){
        box7.classList.remove("white");
        box7.classList.add("red");
        turn = true;
    }
    checkWins();
})

box8.addEventListener("click", function(){
    if(turn===true&&box8.classList.contains("blue")){
        alert("box is already blue");
    } else if(turn===true&&box8.classList.contains("red")){
        alert("box is already red");
    } else if(turn===true&&box8.classList.contains("white")){
        box8.classList.remove("white");
        box8.classList.add("blue");
        turn = false;
    } else if(turn===false&&box8.classList.contains("blue")){
        alert("box is already blue");
    } else if(turn===false&&box8.classList.contains("red")){
        alert("box is already red");
    } else if(turn===false&&box8.classList.contains("white")){
        box8.classList.remove("white");
        box8.classList.add("red");
        turn = true;
    }
    checkWins();
})

box9.addEventListener("click", function(){
    if(turn===true&&box9.classList.contains("blue")){
        alert("box is already blue");
    } else if(turn===true&&box9.classList.contains("red")){
        alert("box is already red");
    } else if(turn===true&&box9.classList.contains("white")){
        box9.classList.remove("white");
        box9.classList.add("blue");
        turn = false;
    } else if(turn===false&&box9.classList.contains("blue")){
        alert("box is already blue");
    } else if(turn===false&&box9.classList.contains("red")){
        alert("box is already red");
    } else if(turn===false&&box9.classList.contains("white")){
        box9.classList.remove("white");
        box9.classList.add("red");
        turn = true;
    }
    checkWins();
})

*/


function checkWins(){
    if(box1.classList.contains("blue")&&box2.classList.contains("blue")&&box3.classList.contains("blue")){
        alert("blue wins");
        resetBox();
    } else if(box1.classList.contains("red")&&box2.classList.contains("red")&&box3.classList.contains("red")){
        alert("red wins");
        resetBox();
    }
    else if(box4.classList.contains("blue")&&box5.classList.contains("blue")&&box6.classList.contains("blue")){
        
    }
}

function resetBox(){
    box1.classList.remove("blue", "red");
    box2.classList.remove("blue", "red");
    box3.classList.remove("blue", "red");
    box4.classList.remove("blue", "red");
    box5.classList.remove("blue", "red");
    box6.classList.remove("blue", "red");
    box7.classList.remove("blue", "red");
    box8.classList.remove("blue", "red");
    box9.classList.remove("blue", "red");
    box1.classList.add("white");
    box2.classList.add("white");
    box3.classList.add("white");
    box4.classList.add("white");
    box5.classList.add("white");
    box6.classList.add("white");
    box7.classList.add("white");
    box8.classList.add("white");
    box9.classList.add("white");
    turn = true;
}

if(turn===true){
    turnScreen.innerHTML("Player One's Turn");
} else{
    turnScreen.innerHTML("Player Two's Turn");
}