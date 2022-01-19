import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {Elevator} from "../../../models/elevator.model";
import {ElevatorService} from "../../../shared/elevator.service";

@Component({
  selector: 'app-floors',
  templateUrl: './floors.component.html',
  styleUrls: ['./floors.component.scss']
})
export class FloorsComponent implements OnInit, OnDestroy {

  elevatorSub!: Subscription;
  elevator!: Elevator;

  @Input() floorColor: string = '';
  @Input() floorNumber: Number = 1;
  constructor(private elevatorService: ElevatorService) { }

  ngOnInit(): void {
    // Listening to data to open or close the door accordingly
    this.elevatorSub = this.elevatorService.elevator.subscribe( data => {
      if (data){
        this.elevator = data;
      }
    })
  }

  ngOnDestroy(): void {
    this.elevatorSub.unsubscribe();
  }

}
