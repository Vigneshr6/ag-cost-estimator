import { TestBed } from '@angular/core/testing';

import { CivilWorkService } from './civil-work.service';

describe('CivilWorkService', () => {
  let service: CivilWorkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CivilWorkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
