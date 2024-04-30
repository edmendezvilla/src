// src/resources.ts

import { Planet } from "./models/planet";
import Spaceship from "./models/spaceship";
import { ResourceType } from "./models/planet"; // Importar ResourceType directamente

function collectResource<T extends ResourceType>(
  planet: Planet,
  spaceship: Spaceship
): void {
  console.log(`Collecting ${planet.resourceType} from planet ${planet.name}`);
  
  // Aquí iría la lógica real de recolección de recursos
}

export { collectResource };
