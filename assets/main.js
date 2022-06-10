let counter = 0;

function doTheThing (idNumber) {
    if (counter === 0) {
        let x = document.createElement("img");
        x.src = "./assets/images/1024px-Red_X.svg.png";
        let chosen = document.getElementById(idNumber);
        chosen.appendChild(x);
        counter += 1
    } else {
        let o = document.createElement("img")
        o.src = "./assets/images/letter O.png";
        let chosen = document.getElementById(idNumber);
        chosen.appendChild(o);
        counter -= 1;
    }
}