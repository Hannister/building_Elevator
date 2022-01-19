import {Floor} from "../models/floor.model";
import {Elevator} from "./elevator.model";


export class Building {

  floors: Floor[];
  elevator: Elevator;

  constructor(floors: Floor, elevator: Elevator) {
    this.floors = [floors];
      this.elevator = elevator;
  }
}
