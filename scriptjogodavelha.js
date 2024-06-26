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

function checkWin(board, player) {
    return winningCombinations.some(combination => {
        return combination.every(index => {
            return board[index] === player;
        });
    });
}

function checkDraw(board) {
    return board.every(cell => cell !== '');
}

function minimax(board, depth, isMaximizing) {
    if (checkWin(board, 'O')) return { score: 10 - depth };
    if (checkWin(board, 'X')) return { score: depth - 10 };
    if (checkDraw(board)) return { score: 0 };

    const moves = [];
    board.forEach((cell, index) => {
        if (cell === '') {
            const newBoard = board.slice();
            newBoard[index] = isMaximizing ? 'O' : 'X';
            const result = minimax(newBoard, depth + 1, !isMaximizing);
            moves.push({ index, score: result.score });
        }
    });

    if (isMaximizing) {
        return moves.reduce((bestMove, move) => move.score > bestMove.score ? move : bestMove, { score: -Infinity });
    } else {
        return moves.reduce((bestMove, move) => move.score < bestMove.score ? move : bestMove, { score: Infinity });
    }
}

function computerMove() {
    const boardArray = [...cells].map(cell => cell.textContent);
    const bestMove = minimax(boardArray, 0, true);
    cells[bestMove.index].textContent = 'O';
    cells[bestMove.index].classList.add('o');
    if (checkWin(boardArray, 'O')) {
        setTimeout(() => alert('O wins!'), 100);
        resetGame();
    } else if (checkDraw(boardArray)) {
        setTimeout(() => alert('Draw!'), 100);
        resetGame();
    } else {
        currentPlayer = 'X';
    }
}

function handleClick(e) {
    const cell = e.target;
    if (cell.textContent === '' && currentPlayer === 'X') {
        cell.textContent = currentPlayer;
        cell.classList.add('x');
        const boardArray = [...cells].map(cell => cell.textContent);
        if (checkWin(boardArray, 'X')) {
            setTimeout(() => alert('X wins!'), 100);
            resetGame();
        } else if (checkDraw(boardArray)) {
            setTimeout(() => alert('Draw!'), 100);
            resetGame();
        } else {
            currentPlayer = 'O';
            setTimeout(computerMove, 500);  // Computador faz o movimento após 0.5 segundos
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