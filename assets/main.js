let counter = 0;

function reset() {
    location.reload()
}

function doTheThing (idNumber) {
    let chosen = document.getElementById(idNumber);
    if (counter === 0 && !chosen.classList.contains("old")) {
        let x = document.createElement("img");
        x.src = "./assets/images/1024px-Red_X.svg.png";
        chosen = document.getElementById(idNumber);
        chosen.appendChild(x);
        counter += 1;
        chosen.classList.add("old");
    } else if (counter === 1 && !chosen.classList.contains("old")) {
        let o = document.createElement("img")
        o.src = "./assets/images/letter O.png";
        chosen = document.getElementById(idNumber);
        chosen.appendChild(o);
        counter -= 1;
        chosen.classList.add("old");
    }
}

