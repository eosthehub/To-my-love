const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const gridSize = 100;
const boardSize = 8;
let board = [];
let currentPlayer = 'player';
let selectedPiece = null;

// Inicializa o tabuleiro com peças
function initializeBoard() {
    for (let row = 0; row < boardSize; row++) {
        board[row] = [];
        for (let col = 0; col < boardSize; col++) {
            if (row < 3 && (row + col) % 2 === 1) {
                board[row][col] = 'b';  // Peça do computador
            } else if (row > 4 && (row + col) % 2 === 1) {
                board[row][col] = 'r';  // Peça do jogador
            } else {
                board[row][col] = null;
            }
        }
    }
}

// Desenha o tabuleiro
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

// Lida com cliques do mouse
canvas.addEventListener('click', (event) => {
    const x = event.offsetX;
    const y = event.offsetY;
    const col = Math.floor(x / gridSize);
    const row = Math.floor(y / gridSize);

    if (currentPlayer === 'player') {
        if (selectedPiece) {
            // Movimento da peça selecionada
            const validMove = makeMove(selectedPiece.row, selectedPiece.col, row, col);
            if (validMove) {
                currentPlayer = 'computer';
                setTimeout(computerMove, 500);
            }
            selectedPiece = null;
        } else {
            // Seleção de peça
            if (board[row][col] === 'r') {
                selectedPiece = { row, col };
            }
        }
    }
});

// Realiza um movimento
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

// Valida um movimento
function validateMove(fromRow, fromCol, toRow, toCol) {
    const piece = board[fromRow][fromCol];
    if (board[toRow][toCol] !== null) return false;
    const rowDiff = toRow - fromRow;
    const colDiff = toCol - fromCol;

    if (Math.abs(rowDiff) === 1 && Math.abs(colDiff) === 1) {
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

// Movimento do computador
function computerMove() {
    const moves = getAllValidMoves('b');
    if (moves.length > 0) {
        const move = moves[Math.floor(Math.random() * moves.length)];
        makeMove(move.fromRow, move.fromCol, move.toRow, move.toCol);
    }
    currentPlayer = 'player';
}

// Obtém todos os movimentos válidos
function getAllValidMoves(player) {
    const moves = [];
    for (let row = 0; row < boardSize; row++) {
        for (let col = 0; col < boardSize; col++) {
            if (board[row][col] === player) {
                const directions = [[-1, -1], [-1, 1], [1, -1], [1, 1]];
                for (let [rowDiff, colDiff] of directions) {
                    const newRow = row + rowDiff;
                    const newCol = col + colDiff;
                    if (validateMove(row, col, newRow, newCol)) {
                        moves.push({ fromRow: row, fromCol: col, toRow: newRow, toCol: newCol });
                    }
                }
            }
        }
    }
    return moves;
}

// Inicializa e desenha o tabuleiro
initializeBoard();
drawBoard();