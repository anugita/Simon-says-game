let gameSeq = [];
let userSeq = [];
let btns = ["red","yellow","green","purple"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");
// let btn = document.querySelector(".btn");

//1.key press - game start
document.addEventListener("keypress",function(){
    if(started == false){
        console.log("game started");
        started = true;

        levelUp();
    }
});

//2.flash button & level up
function levelUp(){
    userSeq = [];
    //increase level
    level++;

    //button flash
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);

    btnFlash(randBtn);
}

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250)
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250)
}

function checkAns(idx){
    // console.log(`Curr level : ${level}`);
    
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h2.innerHTML = `Game over! Your score was <b>${level}</b>.<br> press any key to start`
        document.querySelector("body").style.backgroundColor = "red"
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "#D6CC99";
        },150);
        reset();
    }
}

function btnPress(){
    let btn1 = this;
    userFlash(btn1);
    userColor = btn1.getAttribute("id");
    console.log(userColor);
    userSeq.push(userColor);

    checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for(b of allBtns){
    b.addEventListener("click",btnPress);
}

function reset(){
    level = 0;
    gameSeq = [];
    userSeq = [];
    started = false;
}