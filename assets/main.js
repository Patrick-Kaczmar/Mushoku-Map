let counter = 0;

let box1 = $("#one");
let box2 = $("#two");
let box3 = $("#three");
let box4 = $("#four");
let box5 = $("#five");
let box6 = $("#six");
let box7 = $("#seven");
let box8 = $("#eight");
let box9 = $("#nine");

function reset() {
    location.reload()
}

function alternateTurns(idNumber) {
    let chosen = document.getElementById(idNumber);
    if (counter === 0 && !chosen.classList.contains("old")) {
        let x = document.createElement("img");
        x.src = "./assets/images/1024px-Red_X.svg.png";
        chosen = document.getElementById(idNumber);
        chosen.appendChild(x);
        counter += 1;
        chosen.classList.add("old");
        chosen.classList.add("x")
    } else if (counter === 1 && !chosen.classList.contains("old")) {
        let o = document.createElement("img")
        o.src = "./assets/images/letter O.png";
        chosen = document.getElementById(idNumber);
        chosen.appendChild(o);
        counter -= 1;
        chosen.classList.add("old");
        chosen.classList.add("o")
    }
}

function winCon(idNumber, value) {
    console.log(idNumber, value);
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
    } else if (box1.hasClass("old") && box2.hasClass("old") && box3.hasClass("old")
        && box4.hasClass("old") && box5.hasClass("old") && box6.hasClass("old")
        && box7.hasClass("old") && box8.hasClass("old") && box9.hasClass("old")) {
        alert("Draw!");
        location.reload();
    }
};

function doTheThing(idNumber, value) {
    alternateTurns(idNumber);
    setTimeout(() => {
        winCon(idNumber, value);
    }, 100);
}