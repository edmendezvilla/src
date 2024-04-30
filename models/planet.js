"use strict";
// src/models/planet.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.DangerLevel = exports.ResourceType = exports.Planet = void 0;
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["Water"] = 0] = "Water";
    ResourceType[ResourceType["Oxygen"] = 1] = "Oxygen";
    ResourceType[ResourceType["Minerals"] = 2] = "Minerals";
})(ResourceType || (exports.ResourceType = ResourceType = {}));
var DangerLevel;
(function (DangerLevel) {
    DangerLevel[DangerLevel["Low"] = 0] = "Low";
    DangerLevel[DangerLevel["Medium"] = 1] = "Medium";
    DangerLevel[DangerLevel["High"] = 2] = "High";
})(DangerLevel || (exports.DangerLevel = DangerLevel = {}));
class Planet {
    constructor(name, resourceType, dangerLevel) {
        this.name = name;
        this.resourceType = resourceType;
        this.dangerLevel = dangerLevel;
    }
}
exports.Planet = Planet;
