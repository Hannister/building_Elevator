import {Component, Input, OnInit} from '@angular/core';
import {Building} from "../../models/building.model";

@Component({
  selector: 'app-bulding',
  templateUrl: './building.component.html',
  styleUrls: ['./building.component.scss']
})
export class BuildingComponent implements OnInit {

  @Input() building!: Building ;
  constructor() { }

  ngOnInit(): void {
    // console.log(this.building.floors)
  }



}
