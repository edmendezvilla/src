"use strict";
// src/eventGenerator.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRandomEvent = void 0;
function generateRandomEvent() {
    // Implementar lógica para generar eventos aleatorios
    const events = [
        {
            description: "Meteor shower",
            affectHealth: -10,
            affectCargoCapacity: -5,
        },
        {
            description: "Resource discovery",
            affectHealth: 5,
            affectCargoCapacity: 10,
        },
        // Agregar más eventos según sea necesario
    ];
    // Seleccionar un evento aleatorio de la lista
    const randomIndex = Math.floor(Math.random() * events.length);
    return events[randomIndex];
}
exports.generateRandomEvent = generateRandomEvent;
