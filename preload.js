const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {

    startSimulation: (params) => ipcRenderer.send('start-simulation', params),
    stopSimulation: () => ipcRenderer.send('stop-simulation'),
    onSimulationData: (callback) => ipcRenderer.on('simulation-data', (event, data) => callback(data)),
});
