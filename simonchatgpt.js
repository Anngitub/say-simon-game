 // Variable declarations
let gamesq = [];
let usersq = [];
let start = false;
let level = 0;
let btns = ["pink", "blue", "brown", "green"];
let h2 = document.querySelector("h2");

// Event listener for starting the game
document.addEventListener("keypress", function () {
    if (start == false) {
        console.log("Game started");
        start = true;
        levelup();
    }
});

// Function to flash the button
function btnflash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}

// Function to flash the user button press
function userflash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250);
}

// Function to update the level
function levelup() {
    usersq = [];
    level++;
    h2.innerText = `Level ${level}`;
    let randomidx = Math.floor(Math.random() * 3);
    let randomcolor = btns[randomidx];
    let randombtn = document.querySelector(`.${randomcolor}`);
    gamesq.push(randomcolor);
    console.log(gamesq);
    btnflash(randombtn); // Choose random button
}

// Function to check the user's answer
function checkAns(idx) {
    if (usersq[idx] == gamesq[idx]) {
        if (usersq.length == gamesq.length) {
            setTimeout(levelup, 1000);
        }
    } else {
        h2.innerHTML = `Game over! Your score is: <b>${level}</b><br>Press any key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();
    }let score=[];
    score.push(level);
}

// Function to handle button press by the user
function btnpress() {
    let btn = this;
    userflash(btn);
    userColor = btn.getAttribute("id");
    usersq.push(userColor);
    checkAns(usersq.length - 1);
}

// Event listener for button clicks
let allbtns = document.querySelectorAll(".btn");
for (btn of allbtns) {
    btn.addEventListener("click", btnpress);
}



// Function to update the scoreboard
function updateScoreboard() {
    const scoreboard = document.getElementById("scoreboard");
    scoreboard.innerHTML = "";
    const ul = document.createElement("ul");

    // Retrieve scores from localStorage
    const storedScores = JSON.parse(localStorage.getItem("scores")) || [];

    storedScores.forEach((score, idx) => {
        const li = document.createElement("li");
        li.textContent = `Player ${idx + 1}: ${score}`;
        ul.appendChild(li);
    });

    // Append the <ul> element to the scoreboard <div>
    scoreboard.appendChild(ul);
}

// Function to add a new score
function addScore(score) {
    let storedScores = JSON.parse(localStorage.getItem("scores")) || [];
    storedScores.push(score);
    localStorage.setItem("scores", JSON.stringify(storedScores));
    updateScoreboard(); // Update scoreboard after adding score
}
addScore(score);
// Function to reset the game
function reset() {
    start = false;
    gamesq = [];
    usersq = [];
    level = 0;
}
// Example usage:
