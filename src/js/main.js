let divExemple = document.createElement("div");

divExemple.setAttribute("style", "width: 300px; height:200px");

divExemple.setAttribute("class", "divEx")

let divExempleBorder = document.createElement("div");

divExempleBorder.setAttribute("style", "width: 300px; height:200px; border: 1px lightgray solid");

divExempleBorder.appendChild(divExemple)

let sect = document.querySelector("section");
sect.appendChild(divExempleBorder);

let btn = document.querySelectorAll("button");

let btnGris = btn[0];
btnGris.setAttribute("style", "background-color: slategrey");

let btnRouge = btn[1];
btnRouge.setAttribute("style", "background-color: firebrick");

let btnVert = btn[2];
btnVert.setAttribute("style", "background-color: springgreen");

let btnBleu = btn[3];
btnBleu.setAttribute("style", "background-color: steelblue");

let btnSolid = btn[4];
btnSolid.setAttribute("class", "btnSolid");

let btnDotted = btn[5];
btnDotted.setAttribute("class", "btnDotted");

let btnSolidFine = btn[6];
btnSolidFine.setAttribute("class", "btnSolidFine");

let btnTop1 = btn[7];
btnTop1.setAttribute("class", "btnTop1");

let btnTop2 = btn[8];
btnTop2.setAttribute("class", "btnTop2");

let btnTop3 = btn[9];
btnTop3.setAttribute("class", "btnTop3");

// let divBtn = document.querySelector("div");
// console.log(divBtn)
let inputBG = document.querySelectorAll("input")[1];

let inputBL = inputBG.nextElementSibling;

let inputBT = inputBL.nextElementSibling;

let inputBR = inputBT.nextElementSibling;

let inputBB = inputBR.nextElementSibling;

let inputRadG = document.querySelectorAll("input")[6];
inputRadG.style.borderRadius = "7px"

let inputRadTL = inputRadG.nextElementSibling;
inputRadTL.style.borderTopLeftRadius = "7px"

let inputRadTR = inputRadTL.nextElementSibling;
inputRadTR.style.borderTopRightRadius = "7px"

let inputRadBL = inputRadTR.nextElementSibling;
inputRadBL.style.borderBottomLeftRadius = "7px"

let inputRadBR = inputRadBL.nextElementSibling;
inputRadBR.style.borderBottomRightRadius = "7px"

document.body.addEventListener("click", (e) => {
    if (e.target == btnGris || e.target == btnRouge || e.target == btnVert || e.target == btnBleu) {
        divExemple.setAttribute("style", `${e.target.getAttribute("style")}; width: 300px; height : 200px`)
    } else if (e.target == btnSolid || e.target == btnDotted || e.target == btnSolidFine || e.target == btnTop1 || e.target == btnTop2 || e.target == btnTop3) {
        divExemple.setAttribute("class", e.target.getAttribute("class"))
    } else if (e.target == inputBG) {
        divExemple.style.border = `solid black ${e.target.value}px`;
    } else if (e.target == inputBL) {
        divExemple.style.borderLeft = `solid black ${e.target.value}px`;
    } else if (e.target == inputBT) {
        divExemple.style.borderTop = `solid black ${e.target.value}px`;
    } else if (e.target == inputBR) {
        divExemple.style.borderRight = `solid black ${e.target.value}px`;
    } else if (e.target == inputBB) {
        divExemple.style.borderBottom = `solid black ${e.target.value}px`;
    } else if (e.target == inputRadG) {
        divExemple.style.borderRadius = `${e.target.value}px`;
        divExempleBorder.style.borderRadius = `${e.target.value}px`;
    } else if (e.target == inputRadTL) {
        divExemple.style.borderTopLeftRadius = `${e.target.value}px`;
        divExempleBorder.style.borderTopLeftRadius = `${e.target.value}px`;
    } else if (e.target == inputRadTR) {
        divExemple.style.borderTopRightRadius = `${e.target.value}px`;
        divExempleBorder.style.borderTopRightRadius = `${e.target.value}px`;
    } else if (e.target == inputRadBL) {
        divExemple.style.borderBottomLeftRadius = `${e.target.value}px`;
        divExempleBorder.style.borderBottomLeftRadius = `${e.target.value}px`;
    } else if (e.target == inputRadBR) {
        divExemple.style.borderBottomRightRadius = `${e.target.value}px`;
        divExempleBorder.style.borderBottomRightRadius = `${e.target.value}px`;
    }
});

let inputColor = document.querySelector("form").firstElementChild;

inputColor.addEventListener("blur", () => {
    divExemple.style.backgroundColor = inputColor.value
});