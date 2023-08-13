let rateDivs = document.querySelectorAll("ul.ratings .circle");
let mainPreSubmit = document.querySelector(".pre-submit");
let mainAfterSubmit = document.querySelector(".after-submit");
let submitBtn = document.querySelector("button");
let output = document.querySelector(".selected");

let rated;
window.onload = function () {
    mainPreSubmit.style.display = "block";
    mainAfterSubmit.style.display = "none";
}

rateDivs.forEach((e) => {
    e.onclick = function (ele) {
        rated = ele.currentTarget.value;
        output.textContent = `You selected ${rated} out of 5`;
        rateDivs.forEach((element) => {
            element.style.cssText = "background-color: hsla(216, 12%, 35%, 0.2); color: hsl(217, 12%, 63%)";
        })
        ele.currentTarget.style.cssText = "background-color: hsl(216, 12%, 54%); color: white";
    }
});

submitBtn.onclick = function () {
    mainPreSubmit.style.display = "none";
    mainAfterSubmit.style.display = "block";
}