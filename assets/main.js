// Counter used to alternate turns for each player
let counter = 0;

// saving each grid square to their own variable 
let box1 = $("#one");
let box2 = $("#two");
let box3 = $("#three");
let box4 = $("#four");
let box5 = $("#five");
let box6 = $("#six");
let box7 = $("#seven");
let box8 = $("#eight");
let box9 = $("#nine");

// resets the game when the reset button is clicked
function reset() {
    location.reload()
}


function alternateTurns(idNumber) {
    // targets the div the user clicked on and saves it to the variable "chosen"
    let chosen = document.getElementById(idNumber);
    // if the counter is 0 and does not yet have the class "old", then create an img element, give it the "X" img, append it to the div the user clicked on, increase the counter
    // by 1, add the class "old" and "X" to the chosen div
    if (counter === 0 && !chosen.classList.contains("old")) {
        let x = document.createElement("img");
        x.src = "./assets/images/1024px-Red_X.svg.png";
        chosen = document.getElementById(idNumber);
        chosen.appendChild(x);
        counter += 1;
        chosen.classList.add("old");
        chosen.classList.add("x")
        // Same statement as above except swaped for the "O" player, the counter is decreased by 1 to change the turn 
    } else if (counter === 1 && !chosen.classList.contains("old")) {
        let o = document.createElement("img")
        o.src = "./assets/images/letter-o.svg";
        chosen = document.getElementById(idNumber);
        chosen.appendChild(o);
        counter -= 1;
        chosen.classList.add("old");
        chosen.classList.add("o")
    }
}


function winCon() {
    // checks all the possible win conditions for player "X" and alerts them if they have won
    if (box1.hasClass("x") && box2.hasClass("x") && box3.hasClass("x") ||
        box1.hasClass("x") && box4.hasClass("x") && box7.hasClass("x") ||
        box1.hasClass("x") && box5.hasClass("x") && box9.hasClass("x") ||
        box3.hasClass("x") && box5.hasClass("x") && box7.hasClass("x") ||
        box7.hasClass("x") && box8.hasClass("x") && box9.hasClass("x") ||
        box9.hasClass("x") && box6.hasClass("x") && box3.hasClass("x") ||
        box2.hasClass("x") && box5.hasClass("x") && box8.hasClass("x") ||
        box4.hasClass("x") && box5.hasClass("x") && box6.hasClass("x")) {
        alert("X's have won!");
        location.reload();
        // checks all the possible win conditions for player "O" and alerts them if they have won
    } else if (box1.hasClass("o") && box2.hasClass("o") && box3.hasClass("o") ||
        box1.hasClass("o") && box4.hasClass("o") && box7.hasClass("o") ||
        box1.hasClass("o") && box5.hasClass("o") && box9.hasClass("o") ||
        box3.hasClass("o") && box5.hasClass("o") && box7.hasClass("o") ||
        box7.hasClass("o") && box8.hasClass("o") && box9.hasClass("o") ||
        box9.hasClass("o") && box6.hasClass("o") && box3.hasClass("o") ||
        box2.hasClass("o") && box5.hasClass("o") && box8.hasClass("o") ||
        box4.hasClass("o") && box5.hasClass("o") && box6.hasClass("o")) {
        alert("O's have won!");
        location.reload();
        // if all player squares have been used and given the class "old" and there is still no winner, then alert that the game is a draw.
    } else if (box1.hasClass("old") && box2.hasClass("old") && box3.hasClass("old")
        && box4.hasClass("old") && box5.hasClass("old") && box6.hasClass("old")
        && box7.hasClass("old") && box8.hasClass("old") && box9.hasClass("old")) {
        alert("Draw!");
        location.reload();
    }
};

// function that runs all the check functions when the user clicks on a grid square, takes in one parameter that is the id of the div that was clicked
function doTheThing(idNumber) {
    alternateTurns(idNumber);
    setTimeout(() => {
        winCon();
    }, 100);
}