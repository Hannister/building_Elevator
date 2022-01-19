import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-bulding',
  templateUrl: './building.component.html',
  styleUrls: ['./building.component.scss']
})
export class BuildingComponent implements OnInit {

  @Input() building!: [] ;
  constructor() { }

  ngOnInit(): void {
  }

  counter() {
    return new Array(this.building);
  }

}
