const vocabulary = [
    { word: 'Apple', definition: 'A fruit that grows on trees.' },
    { word: 'Dog', definition: 'A domesticated mammal often kept as a pet.' },
    // Add more words and definitions as needed
];

let currentWordIndex = 0;

const wordContainer = document.getElementById('word-container');
const wordElement = document.getElementById('word');
const definitionInput = document.getElementById('definition');
const submitButton = document.getElementById('submit');
const resultElement = document.getElementById('result');

function loadWord(index) {
    wordElement.textContent = `Word: ${vocabulary[index].word}`;
    definitionInput.value = '';
    resultElement.textContent = '';
}

function checkDefinition() {
    const userDefinition = definitionInput.value.trim();
    const correctDefinition = vocabulary[currentWordIndex].definition;

    if (userDefinition.toLowerCase() === correctDefinition.toLowerCase()) {
        resultElement.textContent = 'Correct! Moving to the next word.';
        currentWordIndex++;
        if (currentWordIndex < vocabulary.length) {
            loadWord(currentWordIndex);
        } else {
            wordContainer.style.display = 'none';
            resultElement.textContent = 'Congratulations! You completed the quiz.';
        }
    } else {
        resultElement.textContent = 'Incorrect. Please try again.';
    }
}

submitButton.addEventListener('click', checkDefinition);

// Initialize the quiz
loadWord(currentWordIndex);
