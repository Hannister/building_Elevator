import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Floor} from "../models/floor.model";
import {ElevatorService} from "../shared/elevator.service";
import {Subscription} from "rxjs";
import {Elevator} from "../models/elevator.model";



@Component({
  selector: 'app-buldings',
  templateUrl: './buildings.component.html',
  styleUrls: ['./buildings.component.scss']
})
export class BuildingsComponent implements OnInit, OnDestroy {

  building: Floor[] = [];
  buildings:any = [];

  floorValue: string = '5';

  elevatorSub!: Subscription;
  elevator!: Elevator;

  constructor(private elevatorService: ElevatorService) {
  }

  ngOnInit(): void {
    this.building= this.createBuildingThisNumOfFloors(Number(this.floorValue)-1);
    this.buildings = [this.building];
    this.elevatorService.setFloorArray(this.building.length);
    console.log(this.building)

    this.elevatorSub = this.elevatorService.elevator.subscribe( data => {
      if (data){
        this.elevator = data;
      }
    })

  }

  floorChange(event:any){
    if(event>0){
      this.building =[];
      this.building= this.createBuildingThisNumOfFloors(Number(event)-1);
      this.elevatorService.setFloorArray(this.building.length);
      this.buildings = [this.building];
      let floorArray = this.elevatorService.setFloorArray(Number(event));
      let floorPixels = floorArray[floorArray.length-1]
      this.elevatorService.elevator.next({current_floor:1, floor_pixels:floorPixels})
    }
  }

  createBuildingThisNumOfFloors(floorNumber:number){
    for(let i = 0; i<= floorNumber;i++){
      this.building.push(new Floor (i+1, '#FEA94E'));
    }
    console.log( this.building);
    return this.building;
  }



  AddBuilding(building:any){
    this.buildings.push(building);
  }

  ngOnDestroy(): void {
    this.elevatorSub.unsubscribe();
  }


}
