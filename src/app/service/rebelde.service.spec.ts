import { TestBed } from '@angular/core/testing';

import { RebeldeService } from './rebelde.service';

describe('RebeldeService', () => {
  let service: RebeldeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RebeldeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
