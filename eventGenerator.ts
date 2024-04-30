// src/eventGenerator.ts

import { Event } from "./models/event";

function generateRandomEvent(): Event {
  // Implementar lógica para generar eventos aleatorios
  const events: Event[] = [
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

export { generateRandomEvent };
