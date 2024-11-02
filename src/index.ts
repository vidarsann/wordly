const word: string = "TESTA"
let currentRow = 0
let currentLetter = 0
const wordRowsArray: HTMLDivElement[][] = []

const createLetterDiv = () => {
    const div = document.createElement("div")
    const divInlineText = document.createElement("h1")
    divInlineText.className = "wordly-letter-inline-text"
    div.className = "wordly-letter"

    div.appendChild(divInlineText)

    return {div, divInlineText }
}

const createWordDiv = (index: number) => {
    const div = document.createElement("div")
    div.className = `wordly-letters-word-grouping_${index} worldy-word-group`

    return div
}

for(let i = 0; i < 5; i++) {
    const wordDiv = createWordDiv(i);
    const wordRow: HTMLDivElement[] = []

    for(let j = 0; j < 5; j++) {
        const {div, divInlineText} = createLetterDiv()
        wordDiv.appendChild(div)
        wordRow.push(divInlineText)
    }

    document.getElementById("wordly-letters")?.appendChild(wordDiv)
    wordRowsArray.push(wordRow)
}

const setNextLetter = (letter: string) => {
    if (currentLetter >= wordRowsArray[currentRow].length) return

    wordRowsArray[currentRow][currentLetter].innerHTML = letter.toUpperCase()
    currentLetter++
}

const removePreviousLetter = () => {
    if (currentLetter <= 0) return

    currentLetter--
    wordRowsArray[currentRow][currentLetter].innerHTML = ""
}

const verifyAnswer = () => {
    if (currentLetter === wordRowsArray[currentRow].length) {
        currentRow++
        currentLetter = 0
    }

    for(let i = 0; i < word.length; i++) {
        if(word[i] === wordRowsArray[currentRow - 1][i].innerHTML) console.log("hello")
    }
}

document.addEventListener("keydown", ({key}) => {
    if (/^[a-zA-Z]$/.test(key)) {
        setNextLetter(key)
    } else if (key === "Enter") {
        verifyAnswer()
    } else if (key === "Backspace") {
        removePreviousLetter()
    }
})

console.log(wordRowsArray)