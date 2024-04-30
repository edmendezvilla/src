"use strict";
// src/simulation.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.simulateTravel = void 0;
const eventHandler_1 = require("./eventHandler");
function simulateTravel(spaceship, events) {
    console.log("Simulating travel...");
    // Simular el paso del tiempo y la distancia
    // Aquí podríamos agregar la lógica para avanzar en el tiempo y la distancia
    // Simular eventos aleatorios durante el viaje
    for (const event of events) {
        (0, eventHandler_1.handleEvent)(event, spaceship);
    }
    console.log("Travel simulation completed");
}
exports.simulateTravel = simulateTravel;
