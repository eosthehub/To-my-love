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
    const cell = e.target;
    let currentColor = cell.textContent || 'R';
    let nextColor = colors[(colors.indexOf(currentColor) + 1) % colors.length];
    cell.textContent = nextColor;
}

function checkGuess() {
    const guess = Array.from(rows[currentRow].querySelectorAll('.cell')).map(cell => cell.textContent);
    let correctColorAndPosition = 0;
    let correctColor = 0;

    let codeCopy = secretCode.slice();
    let guessCopy = guess.slice();

    // Primeiro passo: Verificar cor e posição corretas
    for (let i = 0; i < guess.length; i++) {
        if (guess[i] === secretCode[i]) {
            correctColorAndPosition++;
            codeCopy[i] = null;
            guessCopy[i] = null;
        }
    }

    // Segundo passo: Verificar cor correta na posição errada
    for (let i = 0; i < guessCopy.length; i++) {
        if (guessCopy[i] && codeCopy.includes(guessCopy[i])) {
            correctColor++;
            codeCopy[codeCopy.indexOf(guessCopy[i])] = null;
        }
    }

    const resultCell = rows[currentRow].querySelector('.result');
    resultCell.textContent = `${correctColorAndPosition}A${correctColor}B`;

    if (correctColorAndPosition === 4) {
        setTimeout(() => alert('Você ganhou!'), 100);
        return;
    }

    if (currentRow === rows.length - 1) {
        setTimeout(() => alert('Você perdeu! O código era ' + secretCode.join('')), 100);
        return;
    }

    currentRow++;
}

function resetGame() {
    secretCode = generateSecretCode();
    currentRow = 0;
    rows.forEach(row => {
        row.querySelectorAll('.cell').forEach(cell => cell.textContent = '');
        row.querySelector('.result').textContent = '';
    });
}

rows.forEach(row => {
    row.querySelectorAll('.cell').forEach(cell => {
        cell.addEventListener('click', handleCellClick);
    });
});

submitButton.addEventListener('click', checkGuess);
resetButton.addEventListener('click', resetGame);