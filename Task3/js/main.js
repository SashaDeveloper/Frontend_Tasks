function randomNumberInDomino(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createDivWithAttribute(nameAttribute, valueAttribute) {
    var div = document.createElement("div");
    div.setAttribute(nameAttribute, valueAttribute);
    return div;
}

function createHalf(upperPartId, middlePartId, lowerPartId) {

    var searchedUpperPart = document.getElementById(upperPartId);
    searchedUpperPart.innerHTML = null;
    var searchedMiddlePart = document.getElementById(middlePartId);
    searchedMiddlePart.innerHTML = null;
    var searchedLowerPart = document.getElementById(lowerPartId);
    searchedLowerPart.innerHTML = null;
    var randomNumberInHalfDomino = randomNumberInDomino(0, 6);

    switch (randomNumberInHalfDomino) {
        case 0:
            break;
        case 1:
            searchedMiddlePart.appendChild(createDivWithAttribute("class", "middle"));
            break;
        case 2:
            searchedUpperPart.appendChild(createDivWithAttribute("class", "left"));
            searchedLowerPart.appendChild(createDivWithAttribute("class", "right"));
            break;
        case 3:
            searchedUpperPart.appendChild(createDivWithAttribute("class", "left"));
            searchedMiddlePart.appendChild(createDivWithAttribute("class", "middle"));
            searchedLowerPart.appendChild(createDivWithAttribute("class", "right"));
            break;
        case 4:
            searchedUpperPart.appendChild(createDivWithAttribute("class", "left"));
            searchedUpperPart.appendChild(createDivWithAttribute("class", "right"));
            searchedLowerPart.appendChild(createDivWithAttribute("class", "left"));
            searchedLowerPart.appendChild(createDivWithAttribute("class", "right"));
            break;
        case 5:
            searchedUpperPart.appendChild(createDivWithAttribute("class", "left"));
            searchedUpperPart.appendChild(createDivWithAttribute("class", "right"));
            searchedMiddlePart.appendChild(createDivWithAttribute("class", "middle"));
            searchedLowerPart.appendChild(createDivWithAttribute("class", "left"));
            searchedLowerPart.appendChild(createDivWithAttribute("class", "right"));
            break;
        case 6:
            searchedUpperPart.appendChild(createDivWithAttribute("class", "left"));
            searchedUpperPart.appendChild(createDivWithAttribute("class", "right"));
            searchedMiddlePart.appendChild(createDivWithAttribute("class", "left"));
            searchedMiddlePart.appendChild(createDivWithAttribute("class", "right"));
            searchedLowerPart.appendChild(createDivWithAttribute("class", "left"));
            searchedLowerPart.appendChild(createDivWithAttribute("class", "right"));
            break;
    }
}

function fillingUpperHalf() {
    changeValueDomino(50);
    createHalf("upperHalf-upperPart-js", "upperHalf-middlePart-js", "upperHalf-lowerPart-js");
    createHalf("lowerHalf-upperPart-js", "lowerHalf-middlePart-js", "lowerHalf-lowerPart-js");
    setValueControlOnSizeDominoDefault(50);
    setValueControlOnSpeedDominoDefault(5);
}


var currentNumberDegrees = 0;

function turnDominoe(numberDegreesChanged) {
    var searchedBlockWithDominoe = document.getElementById("blockWithDominoe");
    if (numberDegreesChanged < 0) {
        numberDegreesChanged += currentNumberDegrees;
    }
    if (numberDegreesChanged > 0) {
        numberDegreesChanged += currentNumberDegrees;
    }
    searchedBlockWithDominoe.style.transform = "rotate(" + numberDegreesChanged + "deg)";
    currentNumberDegrees = numberDegreesChanged;
}

function changeValueDomino(valueChange) {
    var defaultValueInputBlock = 50;
    var defaultValueHeight = 10;
    var defaultValueWidthDomino = 5;

    valueChange -= defaultValueInputBlock;

    var elementDomino = document.getElementById("blockWithDominoe");
    elementDomino.style.width = (defaultValueWidthDomino + valueChange / 10) + "em";
    elementDomino.style.height = (defaultValueHeight + valueChange / 10) + "em";
}

function setValueControlOnSizeDominoDefault(defaultValueInputBlock) {
    var elementInputSizeDomino = document.getElementById("rangeInputDominoSize");
    elementInputSizeDomino.value = defaultValueInputBlock;
}

function changeSpeedTurningDomino(valueChange) {
    var defaultValueSpeed = 5;
    var elementDomino = document.getElementById("blockWithDominoe");
    elementDomino.style.webkitTransition = "transform " + (defaultValueSpeed - valueChange/2) + "s ease-in-out"
}

function setValueControlOnSpeedDominoDefault(defaultValueInputBlock) {
    var elementInputSizeDomino = document.getElementById("rangeInputDominoRotatingSpeed");
    elementInputSizeDomino.value = 1;
    var elementDomino = document.getElementById("blockWithDominoe");
    elementDomino.style.webkitTransition = "transform " + defaultValueInputBlock + "s ease-in-out";
}

