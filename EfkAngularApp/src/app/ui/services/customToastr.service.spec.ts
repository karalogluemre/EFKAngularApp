/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CustomToastrService } from './customToastr.service';

describe('Service: CustomToastr', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomToastrService]
    });
  });

  it('should ...', inject([CustomToastrService], (service: CustomToastrService) => {
    expect(service).toBeTruthy();
  }));
});
