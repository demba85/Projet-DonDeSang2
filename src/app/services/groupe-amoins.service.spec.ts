import { TestBed, inject } from '@angular/core/testing';

import { GroupeAmoinsService } from './groupe-amoins.service';

describe('GroupeAmoinsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GroupeAmoinsService]
    });
  });

  it('should be created', inject([GroupeAmoinsService], (service: GroupeAmoinsService) => {
    expect(service).toBeTruthy();
  }));
});
