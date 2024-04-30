"use strict";
// src/eventHandler.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleEvent = void 0;
function handleEvent(event, spaceship) {
    console.log(`Event: ${event.description}`);
    // Aplicar efectos del evento a la nave espacial
    if (event.affectHealth) {
        spaceship.health += event.affectHealth;
    }
    if (event.affectCargoCapacity) {
        spaceship.cargoCapacity += event.affectCargoCapacity;
    }
    if (event.affectSpeed) {
        spaceship.speed += event.affectSpeed;
    }
    console.log("Event handled successfully");
}
exports.handleEvent = handleEvent;
