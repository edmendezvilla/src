// src/models/planet.ts

enum ResourceType {
    Water,
    Oxygen,
    Minerals,
  }
  
  enum DangerLevel {
    Low,
    Medium,
    High,
  }
  
  class Planet {
    constructor(
      public name: string,
      public resourceType: ResourceType,
      public dangerLevel: DangerLevel
    ) {}
  }
  
  export { Planet, ResourceType, DangerLevel };
  