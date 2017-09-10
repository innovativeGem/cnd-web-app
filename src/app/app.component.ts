import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { VehicleLocationService } from './vehicle-location.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  lat: Number = 51.678418;
  lng: Number = 7.809007;
  // vehicle: {'vehicle_id': Number, 'lat': Number, 'long': Number, 'name': String, 'model': String, 'power_level_percent': Number};
  // vehicles: vehicle[];
  vehicle: {};

  constructor(private _vehicleService: VehicleLocationService) {}

  findVehicle() {
    this.vehicle = this._vehicleService.vehicleLoc();
    console.log('vehicle: ' + this.vehicle);
  }

  searchVehicle() {
    console.log('searching...' + this.lat + ', ' + this.lng);
  }

  ngOnInit() {
    this.findVehicle();
  }
}
