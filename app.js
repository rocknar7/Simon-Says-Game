let gameSeq =[];
let userSeq =[];

let btns = ["yellow","red" , "purple","green"];

let Started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(Started == false){
        console.log("Game Started");
        Started = true;
        levelup();
    }


});

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}
function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },250);
}
function levelup(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`; 
    let randInd = Math.floor(Math.random()*4);
    let randcolor = btns[randInd];
    let randbtn = document.querySelector(`.${randcolor}`);
    gameSeq.push(randcolor);
    console.log(gameSeq);
    


    

    btnFlash(randbtn);

}

function checkAns(idx){
    // console.log("curr level :",level);
    if(userSeq[idx] === gameSeq[idx]){
        if (userSeq.length == gameSeq.length) {
           setTimeout(levelup , 1000);
            
        } 
    }else {
        h2.innerHTML = `Game Over!your score was <b>${level}</b> <br> Press any key to start.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";


        },150);
        reset();


}
}
function btnpress(){
    // console.log(this);
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);


}

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
} 

function reset(){
    Started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}
