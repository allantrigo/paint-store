/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { PaintService } from './paint.service';

describe('Service: Paint', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PaintService],
    });
  });

  it('should ...', inject([PaintService], (service: PaintService) => {
    expect(service).toBeTruthy();
  }));
});
