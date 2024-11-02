var _a;
var word = "TESTA";
var currentRow = 0;
var currentLetter = 0;
var wordRowsArray = [];
var createLetterDiv = function () {
    var div = document.createElement("div");
    var divInlineText = document.createElement("h1");
    divInlineText.className = "wordly-letter-inline-text";
    div.className = "wordly-letter";
    div.appendChild(divInlineText);
    return { div: div, divInlineText: divInlineText };
};
var createWordDiv = function (index) {
    var div = document.createElement("div");
    div.className = "wordly-letters-word-grouping_".concat(index, " worldy-word-group");
    return div;
};
for (var i = 0; i < 5; i++) {
    var wordDiv = createWordDiv(i);
    var wordRow = [];
    for (var j = 0; j < 5; j++) {
        var _b = createLetterDiv(), div = _b.div, divInlineText = _b.divInlineText;
        wordDiv.appendChild(div);
        wordRow.push(divInlineText);
    }
    (_a = document.getElementById("wordly-letters")) === null || _a === void 0 ? void 0 : _a.appendChild(wordDiv);
    wordRowsArray.push(wordRow);
}
var setNextLetter = function (letter) {
    if (currentLetter >= wordRowsArray[currentRow].length)
        return;
    wordRowsArray[currentRow][currentLetter].innerHTML = letter.toUpperCase();
    currentLetter++;
};
var removePreviousLetter = function () {
    if (currentLetter <= 0)
        return;
    currentLetter--;
    wordRowsArray[currentRow][currentLetter].innerHTML = "";
};
var verifyAnswer = function () {
    if (currentLetter === wordRowsArray[currentRow].length) {
        currentRow++;
        currentLetter = 0;
    }
    for (var i = 0; i < word.length; i++) {
        if (word[i] === wordRowsArray[currentRow - 1][i].innerHTML)
            console.log("hello");
    }
};
document.addEventListener("keydown", function (_a) {
    var key = _a.key;
    if (/^[a-zA-Z]$/.test(key)) {
        setNextLetter(key);
    }
    else if (key === "Enter") {
        verifyAnswer();
    }
    else if (key === "Backspace") {
        removePreviousLetter();
    }
});
console.log(wordRowsArray);
