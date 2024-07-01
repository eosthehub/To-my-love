const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const tileSize = 32;
const mapWidth = 25;
const mapHeight = 18;

const player = {
    x: 1,
    y: 1,
    hp: 10,
    symbol: '@'
};

const map = [];

function generateMap() {
    for (let y = 0; y < mapHeight; y++) {
        const row = [];
        for (let x = 0; x < mapWidth; x++) {
            if (Math.random() < 0.2) {
                row.push('#'); // wall
            } else {
                row.push('.'); // floor
            }
        }
        map.push(row);
    }
    map[player.y][player.x] = player.symbol;
}

function drawMap() {
    for (let y = 0; y < mapHeight; y++) {
        for (let x = 0; x < mapWidth; x++) {
            const tile = map[y][x];
            if (tile === '#') {
                ctx.fillStyle = 'black';
            } else if (tile === '.') {
                ctx.fillStyle = 'gray';
            } else if (tile === '@') {
                ctx.fillStyle = 'white';
            }
            ctx.fillRect(x * tileSize, y * tileSize, tileSize, tileSize);
        }
    }
}

function movePlayer(dx, dy) {
    const newX = player.x + dx;
    const newY = player.y + dy;

    if (newX >= 0 && newX < mapWidth && newY >= 0 && newY < mapHeight && map[newY][newX] !== '#') {
        map[player.y][player.x] = '.';
        player.x = newX;
        player.y = newY;
        map[player.y][player.x] = player.symbol;
    }
}

document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowUp':
            movePlayer(0, -1);
            break;
        case 'ArrowDown':
            movePlayer(0, 1);
            break;
        case 'ArrowLeft':
            movePlayer(-1, 0);
            break;
        case 'ArrowRight':
            movePlayer(1, 0);
            break;
    }
    drawMap();
});

generateMap();
drawMap();