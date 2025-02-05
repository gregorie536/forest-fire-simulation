const { app, BrowserWindow, ipcMain } = require('electron');
let mainWindow;
let simulationRunning = false;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: `${__dirname}/preload.js`,
            contextIsolation: true,
            nodeIntegration: false,
        },
    });
    mainWindow.loadFile('index.html');
});

ipcMain.on('start-simulation', async (event, params) => {
    console.log('Paramètres reçus pour la simulation :', params);
    simulationRunning = true;

    const simulationResult = await runSimulation(params);
    event.reply('simulation-data', simulationResult);
});

ipcMain.on('stop-simulation', () => {
    console.log('Simulation arrêtée');
    simulationRunning = false;
});

async function runSimulation({ gridSize, humidity, density, iterations }) {
    const grid = initializeGrid(gridSize, density);
    const burningCells = [];

    while (burningCells.length < 2) {
        const x = Math.floor(Math.random() * gridSize);
        const y = Math.floor(Math.random() * gridSize);
        if (grid[x][y] === 1) {
            grid[x][y] = 2;
            burningCells.push([x, y]);
        }
    }

    const states = [];
    for (let step = 0; step < iterations; step++) {
        if (!simulationRunning) {
            console.log(`Simulation interrompue à l'étape : ${step}`);
            break;
        }

        const newBurning = [];
        for (const [x, y] of burningCells) {
            grid[x][y] = 3;
            for (const [dx, dy] of [
                [-1, 0],
                [1, 0],
                [0, -1],
                [0, 1],
            ]) {
                const nx = x + dx;
                const ny = y + dy;
                if (
                    nx >= 0 &&
                    ny >= 0 &&
                    nx < gridSize &&
                    ny < gridSize &&
                    grid[nx][ny] === 1 &&
                    Math.random() < humidity
                ) {
                    grid[nx][ny] = 2;
                    newBurning.push([nx, ny]);
                }
            }
        }

        burningCells.length = 0;
        burningCells.push(...newBurning);
        states.push(JSON.parse(JSON.stringify(grid)));

        if (burningCells.length === 0) break;

        await new Promise(resolve => setTimeout(resolve, 100));
    }

    console.log('États générés :', states);
    return states;
}

function initializeGrid(gridSize, density) {
    const grid = [];
    const vegetationThreshold = { continuous: 1, sparse: 0.95, spaced: 0.8, scattered: 0.5 }[density];
    for (let i = 0; i < gridSize; i++) {
        grid[i] = [];
        for (let j = 0; j < gridSize; j++) {
            grid[i][j] = Math.random() < vegetationThreshold ? 1 : 0;
        }
    }
    return grid;
}
