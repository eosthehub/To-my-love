const board = document.querySelector('.board');
const cells = document.querySelectorAll('.cell');
let currentPlayer = 'X';
const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

function checkWin() {
    return winningCombinations.some(combination => {
        return combination.every(index => {
            return cells[index].textContent === currentPlayer;
        });
    });
}

function checkDraw() {
    return [...cells].every(cell => cell.textContent);
}

function handleClick(e) {
    const cell = e.target;
    if (cell.textContent === '') {
        cell.textContent = currentPlayer;
        cell.classList.add(currentPlayer.toLowerCase());
        if (checkWin()) {
            setTimeout(() => alert(`${currentPlayer} wins!`), 100);
            resetGame();
        } else if (checkDraw()) {
            setTimeout(() => alert('Draw!'), 100);
            resetGame();
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

function resetGame() {
    cells.forEach(cell => {
        cell.textContent = '';
        cell.classList.remove('x', 'o');
    });
    currentPlayer = 'X';
}

board.addEventListener('click', handleClick);