import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';

@Injectable()
export class VehicleLocationService {

  constructor(private _http: Http) { }

  vehicleLoc() {
      return this._http.get(`http://cndlunarlocator.herokuapp.com/vehicles/0/locate.json`)
      .map((res: Response) => res.json())
      .catch(this._errorHandler);
  }

  _errorHandler(err: any) {
    console.log(err);
    return Observable.throw(err);
  }

}
