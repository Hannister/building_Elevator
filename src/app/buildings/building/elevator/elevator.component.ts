import {AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, Renderer2, ViewChild} from '@angular/core';
import {Elevator} from "../../../models/elevator.model";
import {Subscription} from "rxjs";
import {ElevatorService} from "../../../shared/elevator.service";

@Component({
  selector: 'app-elevator',
  templateUrl: './elevator.component.html',
  styleUrls: ['./elevator.component.scss']
})
export class ElevatorComponent implements OnInit, OnDestroy, AfterViewInit {

  // buildingElevator: Elevator = new Elevator( 1, null);
  elevatorSub!: Subscription;
  @ViewChild('elevatorElement') elevatorElement!: ElementRef;

  constructor(private elevatorService: ElevatorService,
              private renderer: Renderer2) { }

  ngOnInit(): void {


  }

  ngOnDestroy(): void {
    this.elevatorSub.unsubscribe();
  }

  ngAfterViewInit(): void {
    this.elevatorSub = this.elevatorService.elevator.subscribe( data =>{
      if(data){
        this.renderer.setStyle(this.elevatorElement.nativeElement,
          'top', `${data.floor_pixels}px`);
      }
    })
    console.log(this.elevatorElement)

  }

}
