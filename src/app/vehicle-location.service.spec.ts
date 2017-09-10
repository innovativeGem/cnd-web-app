import { TestBed, inject } from '@angular/core/testing';

import { VehicleLocationService } from './vehicle-location.service';

describe('VehicleLocationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VehicleLocationService]
    });
  });

  it('should be created', inject([VehicleLocationService], (service: VehicleLocationService) => {
    expect(service).toBeTruthy();
  }));
});
