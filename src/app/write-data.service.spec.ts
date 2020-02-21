import { TestBed } from '@angular/core/testing';

import { WriteDataService } from './write-data.service';

describe('WriteDataService', () => {
  let service: WriteDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WriteDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
