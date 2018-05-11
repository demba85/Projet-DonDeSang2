import { TestBed, inject } from '@angular/core/testing';

import { DonDeSangService } from './don-de-sang.service';

describe('DonDeSangService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DonDeSangService]
    });
  });

  it('should be created', inject([DonDeSangService], (service: DonDeSangService) => {
    expect(service).toBeTruthy();
  }));
});
