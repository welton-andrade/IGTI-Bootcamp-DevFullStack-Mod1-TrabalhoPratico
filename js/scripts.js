window.addEventListener("load", start);

function start() {
    var rangeRed = document.querySelector("#rangeRed");
    var rangeGreen = document.querySelector("#rangeGreen");
    var rangeBlue = document.querySelector("#rangeBlue");

    rangeRed.addEventListener("input", updateValueRed);
    rangeGreen.addEventListener("input", updateValueGreen);
    rangeBlue.addEventListener("input", updateValueBlue);

    rangeRed.value = '0', rangeBlue.value = '0', rangeGreen.value = '0';

    startValues();
    renderColor(rangeRed.value,rangeGreen.value,rangeBlue.value);
}

function updateValueRed(event) {
    var valueRed = document.querySelector("#valueRed");
    valueRed.value = rangeRed.value;
    renderColor(rangeRed.value,rangeGreen.value,rangeBlue.value);
}

function updateValueGreen(event) {
    var valueGreen = document.querySelector("#valueGreen");
    valueGreen.value = rangeGreen.value;
    renderColor(rangeRed.value,rangeGreen.value,rangeBlue.value);
}

function updateValueBlue(event) {
    var valueBlue = document.querySelector("#valueBlue");
    valueBlue.value = rangeBlue.value;
    renderColor(rangeRed.value,rangeGreen.value,rangeBlue.value);
}

function startValues() {
    updateValueRed();
    updateValueBlue();
    updateValueGreen();
}

function renderColor(r,g,b) {
    var color = document.querySelector("#color");
    color.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}