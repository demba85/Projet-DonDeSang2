import { TestBed, inject } from '@angular/core/testing';

import { GroupeAbplusService } from './groupe-abplus.service';

describe('GroupeAbplusService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GroupeAbplusService]
    });
  });

  it('should be created', inject([GroupeAbplusService], (service: GroupeAbplusService) => {
    expect(service).toBeTruthy();
  }));
});
