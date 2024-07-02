const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const gridSize = 100;
const boardSize = 8;
let board = [];
let currentPlayer = 'player';
let selectedPiece = null;

function initializeBoard() {
    for (let row = 0; row < boardSize; row++) {
        board[row] = [];
        for (let col = 0; col < boardSize; col++) {
            if (row < 3 && (row + col) % 2 === 1) {
                board[row][col] = 'b';
            } else if (row > 4 && (row + col) % 2 === 1) {
                board[row][col] = 'r';
            } else {
                board[row][col] = null;
            }
        }
    }
}

function drawBoard() {
    for (let row = 0; row < boardSize; row++) {
        for (let col = 0; col < boardSize; col++) {
            if ((row + col) % 2 === 1) {
                ctx.fillStyle = '#34495e';
            } else {
                ctx.fillStyle = '#ecf0f1';
            }
            ctx.fillRect(col * gridSize, row * gridSize, gridSize, gridSize);

            const piece = board[row][col];
            if (piece) {
                ctx.beginPath();
                ctx.arc(col * gridSize + gridSize / 2, row * gridSize + gridSize / 2, gridSize / 2 - 10, 0, 2 * Math.PI);
                ctx.fillStyle = piece === 'r' ? 'red' : 'black';
                ctx.fill();
            }
        }
    }
}

canvas.addEventListener('click', (event) => {
    const x = event.offsetX;
    const y = event.offsetY;
    const col = Math.floor(x / gridSize);
    const row = Math.floor(y / gridSize);

    if (currentPlayer === 'player') {
        if (selectedPiece) {
            const validMove = makeMove(selectedPiece.row, selectedPiece.col, row, col);
            if (validMove) {
                currentPlayer = 'computer';
                setTimeout(computerMove, 500);
            }
            selectedPiece = null;
        } else {
            if (board[row][col] === 'r') {
                selectedPiece = { row, col };
            }
        }
    }
});

function makeMove(fromRow, fromCol, toRow, toCol) {
    const piece = board[fromRow][fromCol];
    const isValidMove = validateMove(fromRow, fromCol, toRow, toCol);

    if (isValidMove) {
        board[toRow][toCol] = piece;
        board[fromRow][fromCol] = null;
        drawBoard();
        return true;
    }
    return false;
}

function validateMove(fromRow, fromCol, toRow, toCol) {
    const piece = board[fromRow][fromCol];
    if (board[toRow][toCol] !== null) return false;
    const rowDiff = toRow - fromRow;
    const colDiff = toCol - fromCol;

    if (piece === 'r' && rowDiff === -1 && Math.abs(colDiff) === 1) {
        return true;
    } else if (piece === 'b' && rowDiff === 1 && Math.abs(colDiff) === 1) {
        return true;
    } else if (Math.abs(rowDiff) === 2 && Math.abs(colDiff) === 2) {
        const jumpedRow = fromRow + rowDiff / 2;
        const jumpedCol = fromCol + colDiff / 2;
        const jumpedPiece = board[jumpedRow][jumpedCol];
        if (jumpedPiece && jumpedPiece !== piece) {
            board[jumpedRow][jumpedCol] = null;
            return true;
        }
    }
    return false;
}

function computerMove() {
    const moves = getAllValidMoves('b');
    if (moves.length > 0) {
        const move = moves[Math.floor(Math.random() * moves.length)];
        makeMove(move.fromRow, move.fromCol, move.toRow, move.toCol);
    }
    currentPlayer = 'player';
}

function getAllValidMoves(player) {
    const moves = [];
    for (let row = 0; row < boardSize; row++) {
        for (let col = 0; col < boardSize; col++) {
            if (board[row][col] === player) {
                const directions = player === 'r' ? [[-1, -1], [-1, 1]] : [[1, -1], [1, 1]];
                for (let [rowDiff, colDiff] of directions) {
                    const newRow = row + rowDiff;
                    const newCol = col + colDiff;
                    if (validateMove(row, col, newRow, newCol)) {
                        moves.push({ fromRow: row, fromCol: col, toRow: newRow, toCol: newCol });
                    }
                    const jumpRow = row + rowDiff * 2;
                    const jumpCol = col + colDiff * 2;
                    if (validateMove(row, col, jumpRow, jumpCol)) {
                        moves.push({ fromRow: row, fromCol: col, toRow: jumpRow, toCol: jumpCol });
                    }
                }
            }
        }
    }
    return moves;
}

document.getElementById('restartButton').addEventListener('click', () => {
    initializeBoard();
    drawBoard();
    currentPlayer = 'player';
    selectedPiece = null;
});

document.getElementById('redirectButton').addEventListener('click', () => {
    window.location.href = 'index.html';
});

initializeBoard();
drawBoard();