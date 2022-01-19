import {Component, OnInit} from '@angular/core';
import {Floor} from "../models/floor.model";
import {ElevatorService} from "../shared/elevator.service";
import {Building} from "../models/building.model";



@Component({
  selector: 'app-buldings',
  templateUrl: './buildings.component.html',
  styleUrls: ['./buildings.component.scss']
})
export class BuildingsComponent implements OnInit {

  building!: Building ;
  buildings:any = [] ;

  //number of floor according to the exercise
  floorValue: string = '5';


  constructor(private elevatorService: ElevatorService) {
  }

  ngOnInit(): void {
    //creating the building
    this.createBuilding();
    this.building.floors= this.createBuildingThisNumOfFloors(Number(this.floorValue)-1,"#FEA94E");
    //adding the building to the street
    this.buildings = [this.building];
    // updating the number of floors in the elevator
    this.elevatorService.setFloorArray(this.building.floors.length);

  }

  floorChange(event:any){
    this.building.floors= [];
    this.building.floors= this.createBuildingThisNumOfFloors(Number(event)-1,"#FEA94E");
    this.elevatorService.setFloorArray(this.building.floors.length);
    this.buildings = [this.building];
    let floorArray = this.elevatorService.setFloorArray(Number(event));
    // moving the elevator according to the new number of floors
    let floorPixels = floorArray[floorArray.length-1];
    this.elevatorService.elevator.next({current_floor:1, floor_pixels:floorPixels})
  }

  createBuildingThisNumOfFloors(floorNumber:number, color: string){
    this.building.floors = [];
    for(let i = 0; i<= floorNumber;i++){
      this.building.floors.push({floor_number: i+1, floor_color: color})
    }
    return this.building.floors;
  }

  createBuilding(){
     this.building = new Building({ floor_number: 1, floor_color: ''},
      { current_floor: 1, floor_pixels: this.elevatorService.getCurrentElevatorPosition().floor_pixels} )
  }

}
