const reset =document.getElementById("reset");
const play =document.getElementById("playnext");
const box =document.getElementById("box");
const container =document.getElementsByClassName("container");
const board =document.getElementById("board");
const cells =document.querySelectorAll("#board .cell");
const clickSound =document.getElementById("click");
const drawSound =document.getElementById("draw");
const winnerSound =document.getElementById("winner");
const scoreboard =document.getElementById("score-board");
const playerXDisplay =document.getElementById("playerX").querySelector("span");
const playerODisplay =document.getElementById("playerO").querySelector("span");
const tiesDisplay =document.getElementById("ties").querySelector("span");



let playerXScore = 0;
let playerOScore = 0;
let tiesScore = 0;
let trunx = true;
let count =0;

winner =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

function checkwinner(){
    for (let pattern of winner){
       let val1 = cells[pattern[0]].innerHTML
       let val2 = cells[pattern[1]].innerHTML
       let val3 = cells[pattern[2]].innerHTML
       
       if (val1!="" && val1 == val2 && val2 == val3){
        box.innerHTML = `Victory! ${val1} is the KING 👑`;
         updateScoreboard(val1);
        box.style.background = "green";
          winnerSound.play();
             disabledcells()
             return;
       }
    }
     draw();
}

cells.forEach((cell)=>{
    cell.addEventListener("click",()=>{
        clickSound.play();
         box.innerHTML = "Game in progress... ⏳";
        if(cell.innerHTML !="") return;
        if(trunx){
            cell.innerHTML ="X"
            trunx =false
        }
        else{
            cell.innerHTML ="O"
            trunx = true
        }
    
         count++;
        checkwinner()
       
    });
  
    
});

    function disabledcells(){
    cells.forEach((cell)=>{
        cell.disabled = true;
    });
}

function draw(){
    if(count===9){
        box.innerHTML = "Stalemate! Try again? 🔁";
        updateScoreboard("tie");
         box.style.background = "red";
            drawSound.play();
        disabledcells()
    };
}

function updateScoreboard(winner){
    if(winner === "X"){
        playerXScore++;
    }
     else if(winner === "O"){
        playerOScore++;
    } 
    else{
        tiesScore++;
    }
    playerXDisplay.textContent = playerXScore;
    playerODisplay.textContent = playerOScore;
    tiesDisplay.textContent = tiesScore;
}

reset.addEventListener("click",()=>{
   resetgame()
    clickSound.play();
    });



function resetgame(){
    cells.forEach((cell)=>{
        cell.disabled = false;
        cell.innerHTML = "";
        box.innerHTML = "Ready to Rumble?🚀";
       playerXDisplay.textContent = 0;
       playerODisplay.textContent = 0;
       tiesDisplay.textContent = 0;
       playerXScore = 0;
       playerOScore = 0;
       tiesScore = 0;
    });
         box.style.background = "";
   trunx = true;
    count =0;
    }; 



function playnext(){
    cells.forEach((cell)=>{
        cell.disabled = false;
        cell.innerHTML = "";
        cell.style.pointerEvents = "auto";
        box.innerHTML = "Ready for the Next Round? 🎯";
    });
      box.style.background = "";
   trunx = true;
    count =0;
}

play.addEventListener("click",()=>{
    playnext();
    clickSound.play();
    });



