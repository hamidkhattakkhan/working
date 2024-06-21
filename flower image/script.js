let boxs = document.querySelectorAll(".boxs");
let resetButton = document.querySelector(".reset");

let turnO = true; 
let moves = 0; 
const winPatterns = [
    [0, 1, 2], 
    [3, 4, 5], 
    [6, 7, 8], 
    [0, 3, 6], 
    [1, 4, 7], 
    [2, 5, 8], 
    [0, 4, 8], 
    [2, 4, 6]  
];

const restgame = () => {
    turnO = true;
    disabledboxes = true

}
boxs.forEach((box, index) => {
    box.addEventListener("click", () => {
        if (box.textContent === "") 
            if (turnO) {
                box.textContent = "O";
                turnO=false;
            } else {
                box.textContent = "X";
                turnO=true;
            }
            box.disabled = true;

            checkwinner();
    });
})

const disabledboxes = ()  => {
    for(let box of boxes) {
        box.disabled = true;
    }

}

const showwinner = (winner) => {
    aisf.innertext = 'congratulation,  winner is ${winner}';
    ContainerRule.classlist.remove('hide');
    disabledboxes();
}


const checkwinner = () => {
    for(patterns of winPatterns) {

    let pos1val = boxes[pattern [0]].innertext;
    let pos2val = boxes[pattern [0]].innertext;
    let pos3val = boxes[pattern [0]].innertext;
     if(pos1val != "" && pos2val != "" && pos3val != ""){
        if(pos1val === pos2val && pos2val === pos3val){
        console.log("winner", pos1val);
        showwinner(pos1val);
     }
    }
}
};

