import {Component, Input, OnInit} from '@angular/core';
import {ElevatorService} from "../../../shared/elevator.service";
import {Subscription} from "rxjs";
import {Elevator} from "../../../models/elevator.model";

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {


  @Input() numberOfFloors: number = 1;

  floorNumber:number = 1;
  elevatorSub!: Subscription;
  elevator!: Elevator;

  constructor(private elevatorService: ElevatorService,) { }

  ngOnInit(): void {
    this.elevatorSub = this.elevatorService.elevator.subscribe( data => {
      if (data){
        this.elevator = data;
      }
    })
  }

  counter() {
    return new Array(this.numberOfFloors);
  }
  goToFloor(nextFloor:number){
    this.floorNumber = nextFloor;
    this.elevatorService.goToFloor(nextFloor,this.numberOfFloors, this.elevator.floor_pixels)
  }
}
