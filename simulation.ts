// src/simulation.ts

import Spaceship from "./models/spaceship";
import { Event } from "./models/event";
import { handleEvent } from "./eventHandler";

function simulateTravel(spaceship: Spaceship, events: Event[]): void {
  console.log("Simulating travel...");

  // Simular el paso del tiempo y la distancia
  // Aquí podríamos agregar la lógica para avanzar en el tiempo y la distancia

  // Simular eventos aleatorios durante el viaje
  for (const event of events) {
    handleEvent(event, spaceship);
  }

  console.log("Travel simulation completed");
}

export { simulateTravel };
