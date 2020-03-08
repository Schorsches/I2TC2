import { TestBed } from '@angular/core/testing';

import { ManagePlayerService } from './manage-player.service';

describe('ManagePlayerService', () => {
  let service: ManagePlayerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManagePlayerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
