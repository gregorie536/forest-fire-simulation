const gridSize = 50;
const grid = [];
let isRunning = false;
let humidity = 0.3;

const states = {
    EMPTY: 0,
    VEGETATION: 1,
    BURNING: 2,
    BURNED: 3,
};

document.getElementById('start-button').classList.add('running');
document.getElementById('stop-button').classList.remove('stopped');

function initializeGrid() {
    const gridElement = document.getElementById('grid');
    gridElement.innerHTML = "";
    gridElement.style.gridTemplateColumns = `repeat(${gridSize}, 10px)`;

    for (let i = 0; i < gridSize; i++) {
        grid[i] = [];
        for (let j = 0; j < gridSize; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');

            grid[i][j] = states.VEGETATION;
            gridElement.appendChild(cell);
        }
    }
}

function updateGrid(gridState) {
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            const cellState = gridState[i][j];
            const stateClass =
                cellState === 1 ? 'vegetation' :
                    cellState === 2 ? 'burning' :
                        cellState === 3 ? 'burned' : 'empty';
            updateCell(i, j, stateClass);
        }
    }
}

function updateCell(x, y, state) {
    const index = x * gridSize + y;
    const cell = document.querySelectorAll('.cell')[index];
    cell.className = `cell ${state}`;
}

document.getElementById('start-button').addEventListener('click', () => {
    const iterations = parseInt(document.getElementById('iterations').value);
    const humidity = parseFloat(document.querySelector('input[name="humidity"]:checked').value);
    const density = document.querySelector('input[name="terrain"]:checked').value;

    console.log('Paramètres envoyés :', { gridSize, humidity, density, iterations });

    isRunning = true;

    window.api.startSimulation({
        gridSize,
        humidity,
        density,
        iterations,
    });
});

document.getElementById('stop-button').addEventListener('click', () => {
    isRunning = false;
    console.log("Simulation arrêtée par l'utilisateur");
    window.api.stopSimulation();
});

window.api.onSimulationData((states) => {
    console.log('Résultats de la simulation reçus :', states);

    initializeGrid();

    (async () => {
        for (const [index, state] of states.entries()) {
            if (!isRunning) {
                console.log("Simulation arrêtée par l'utilisateur");
                break;
            }
            updateGrid(state);
            await new Promise(resolve => setTimeout(resolve, 500));
        }
    })();
});

initializeGrid();
