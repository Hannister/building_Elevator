import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuildingsComponent } from './buildings/buildings.component';
import { BuildingComponent } from './buildings/building/building.component';
import { ElevatorComponent } from './buildings/building/elevator/elevator.component';
import { FloorsComponent } from './buildings/building/floors/floors.component';
import { ButtonsComponent } from './buildings/building/buttons/buttons.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    BuildingsComponent,
    BuildingComponent,
    ElevatorComponent,
    FloorsComponent,
    ButtonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
