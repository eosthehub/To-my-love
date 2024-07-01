const rows = document.querySelectorAll('.row');
const submitButton = document.getElementById('submitGuess');
const resetButton = document.getElementById('resetGame');

let secretCode = generateSecretCode();
let currentRow = 0;

function generateSecretCode() {
    const colors = ['R', 'G', 'B', 'Y', 'O', 'P'];
    let code = [];
    for (let i = 0; i < 4; i++) {
        code.push(colors[Math.floor(Math.random() * colors.length)]);
    }
    return code;
}

function handleCellClick(e) {
    const colors = ['R', 'G', 'B', 'Y', 'O', 'P'];
let code = [];
let attempts = 0;
const maxAttempts = 10;

function generateCode() {
    code = [];
    for (let i = 0; i < 4; i++) {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        code.push(randomColor);
    }
}

function checkGuess(guess) {
    let exactMatches = 0;
    let colorMatches = 0;
    const guessCopy = guess.slice();
    const codeCopy = code.slice();

    for (let i = 0; i < 4; i++) {
        if (guessCopy[i] === codeCopy[i]) {
            exactMatches++;
            guessCopy[i] = codeCopy[i] = null;
        }
    }

    for (let i = 0; i < 4; i++) {
        if (guessCopy[i] !== null) {
            const index = codeCopy.indexOf(guessCopy[i]);
            if (index !== -1) {
                colorMatches++;
                codeCopy[index] = null;
            }
        }
    }

    return { exactMatches, colorMatches };
}

document.getElementById('submit-guess').addEventListener('click', () => {
    const guess = [
        document.getElementById('guess1').value.toUpperCase(),
        document.getElementById('guess2').value.toUpperCase(),
        document.getElementById('guess3').value.toUpperCase(),
        document.getElementById('guess4').value.toUpperCase()
    ];

    const { exactMatches, colorMatches } = checkGuess(guess);

    const resultDiv = document.getElementById('result');
    attempts++;
    if (exactMatches === 4) {
        resultDiv.textContent = `Você ganhou! O código era ${code.join('')}`;
    } else if (attempts >= maxAttempts) {
        resultDiv.textContent = `Você perdeu! O código era ${code.join('')}`;
    } else {
        resultDiv.textContent = `${exactMatches} cores na posição correta, ${colorMatches} cores na posição incorreta. Tentativas restantes: ${maxAttempts - attempts}`;
    }
});

document.getElementById('reset-game').addEventListener('click', () => {
    generateCode();
    attempts = 0;
    document.getElementById('result').textContent = '';
    document.getElementById('guess1').value = '';
    document.getElementById('guess2').value = '';
    document.getElementById('guess3').value = '';
    document.getElementById('guess4').value = '';
});

generateCode();