import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';

@Injectable()
export class VehicleLocationService {

  // vehicle: {'vehicle_id': Number, 'lat': Number, 'long': Number, 'name': String, 'model': String, 'power_level_percent': Number};
  // vehicle: new Vehicle();

  constructor(private _http: Http) { }
// .map((res: Response) => res.json())
  vehicleLoc() {
    // this.vehicle = new Vehicle();
      return this._http.get(`http://cndlunarlocator.herokuapp.com/vehicles/0/locate.json`)
      .map((res: Response) => res.json());
      // .catch(this._errorHandler);
  }

  /*
  _errorHandler(err: any) {
    console.log(err);
    return Observable.throw(err);
  }
  */

}
