import { Injectable } from '@angular/core';
import {Elevator} from "../models/elevator.model";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ElevatorService {

  floorHeight:number = 160;
  topMargin: number = 45;
  floorArray:number[] = [];
  firstFloor: number = this.floorArray[this.floorArray.length-1] ;
  elevator: BehaviorSubject<Elevator> = new BehaviorSubject<Elevator>({current_floor:1, floor_pixels: this.firstFloor});

  constructor() { }

  goToFloor(nextFloor: number, floorNum: number, previousPixels:number){
    this.floorArray = this.setFloorArray(floorNum);

    let floorPixels = this.floorArray[this.floorArray.length-nextFloor]
    this.elevator.next( {current_floor: nextFloor,floor_pixels: previousPixels});
    setTimeout( ()=> {
      this.elevator.next( {current_floor: nextFloor,floor_pixels: floorPixels});
    }, 400)
  }

  setFloorArray(floorNum:number): number[]{
    let tempList = [];
    for( let i = 0 ; i<= floorNum-1; i++){
      tempList.push(this.topMargin+(this.floorHeight*i))
    }
    return tempList;
  }
}
