/*simon game
let gamesq=[];
let usersq=[];
let start=false;
let level=0;
let btns=["pink","blue","brown","green"];
let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(start==false){
    console.log("game started");
    start=true;

    levelup();
    }
    });
    /*
   let btn=document.querySelector("div");
    btn.addEventListener("click",function(){
        console.log("click");
});
    function btnflash(btn){
        btn.classList.add("flash");
        setTimeout(function(){
            btn.classList.remove("flash");
        },250);
    }   
    function userflash(btn){
        btn.classList.add("userflash");
        setTimeout(function(){
            btn.classList.remove("userflash");
        },250);
    }     
    
    function levelup(){
        usersq=[];
        level++;
        h2.innerText=`Level${level}`;
        let randomidx=Math.floor(Math.random()*3);
        //console.log(randomidx);
        let randomcolor=btns[randomidx];
        //console.log(randomcolor);
        let randombtn=document.querySelector(`.${randomcolor}`);
        //console.log(randombtn);
        gamesq.push(randomcolor);
        console.log(gamesq);
        btnflash(randombtn);//choose random button
    }
    function checkAns(idx){
       // let idx=level-1;
        if(usersq[idx]==gamesq[idx]){
            if(usersq.length==gamesq.length){
                setTimeout(levelup(),1000);
            }
            //console.log("same value");
        }else{
            h2.innerHTML=`Game over! your score is:<b>${level}</b> <br>press any key to start`;
            document.querySelector("body").style.backgroundColor="red";
            level=score[0];
            setTimeout(function(){
                document.querySelector("body").style.backgroundColor="white";
            },150)
           reset();
        }
        }
    function btnpress(){
        let btn=this;
        userflash(btn);
        //console.log(this);
        userColor=btn.getAttribute("id");
        usersq.push(userColor);
        checkAns(usersq.length-1);
    }
    let allbtns=document.querySelectorAll(".btn");
    for(btn of allbtns){
        btn.addEventListener("click",btnpress);
    }
    function reset(){
        start=false;
        gamesq=[];
        usersq=[];
        level=0;
    }    
*/
//simon game
let gamesq = [];
let usersq = [];
let start = false;
let level = 0;
let btns = ["pink", "blue", "brown", "green"];
let h2 = document.querySelector("h2");

// Add the scoreboard script here

// Initialize current score and highest score
let currentScore = 0;
let highestScore = localStorage.getItem('highestScore') || 0;

// Function to update the scoreboard
function updateScoreboard() {
    document.getElementById('current-score').innerText = currentScore;
    document.getElementById('highest-score').innerText = highestScore;
}

// Function to update the highest score
function updateHighestScore() {
    if (currentScore > highestScore) {
        highestScore = currentScore;
        localStorage.setItem('highestScore', highestScore);
        updateScoreboard();
    }
}

// Function to increment the current score
function incrementScore() {
    currentScore++;
    updateScoreboard();
}

// Function to reset the current score
function resetScore() {
    currentScore = 0;
    updateScoreboard();
}

document.addEventListener("keypress", function () {
    if (start == false) {
        console.log("game started");
        start = true;
        levelup();
    }
});

function btnflash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}

function userflash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250);
}

function levelup() {
    usersq = [];
    level++;
    h2.innerText = `Level${level}`;
    let randomidx = Math.floor(Math.random() * 3);
    let randomcolor = btns[randomidx];
    let randombtn = document.querySelector(`.${randomcolor}`);
    gamesq.push(randomcolor);
    btnflash(randombtn);
}

function checkAns(idx) {
    if (usersq[idx] == gamesq[idx]) {
        if (usersq.length == gamesq.length) {
            setTimeout(levelup(), 1000);
            incrementScore(); // Increment score when the user completes a level
        }
    } else {
        h2.innerHTML = `Game over! your score is:<b>${level}</b> <br>press any key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150)
        updateHighestScore(); // Update the highest score when the game is over
        resetScore(); // Reset the score when the game is over
        start = false; // Reset game state
        gamesq = []; // Reset game sequence
    }
}

function btnpress() {
    let btn = this;
    userflash(btn);
    userColor = btn.getAttribute("id");
    usersq.push(userColor);
    checkAns(usersq.length - 1);
}

let allbtns = document.querySelectorAll(".btn");
for (btn of allbtns) {
    btn.addEventListener("click", btnpress);
}

function reset() {
    start = false;
    gamesq = [];
    usersq = [];
    level = 0;
    resetScore(); // Reset the score when resetting the game
}
