

const container = document.getElementsByClassName("container");
const board = document.getElementById("board");
const cells = document.querySelectorAll("#board .cell");

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
        console.log(`winner is ${val1}`);
        disabledcells()
       
       }
       else{
          count++;
        draw();
       }
    }
}

cells.forEach((cell)=>{
    cell.addEventListener("click",()=>{
        if(cell.innerHTML !="") return;
        if(trunx){
            cell.innerHTML ="X"
            trunx =false
           
        }
        else{
            cell.innerHTML ="O"
            trunx = true
          
          
        }
    

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
        console.log("It's a draw");
    };
  
}








