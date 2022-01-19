export class Elevator {
  current_floor: number;
  floor_pixels: number;

  constructor(currentFloor:number, floorPixels:number, floorsNumber:number) {
    this.current_floor = currentFloor;
    this.floor_pixels = floorPixels;
  }
}
