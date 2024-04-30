// src/eventHandler.ts

import { Event } from "./models/event";
import Spaceship from "./models/spaceship";

function handleEvent(event: Event, spaceship: Spaceship): void {
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

export { handleEvent };
