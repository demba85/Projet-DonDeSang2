import { TestBed, inject } from '@angular/core/testing';

import { GroupeAbmoinsService } from './groupe-abmoins.service';

describe('GroupeAbmoinsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GroupeAbmoinsService]
    });
  });

  it('should be created', inject([GroupeAbmoinsService], (service: GroupeAbmoinsService) => {
    expect(service).toBeTruthy();
  }));
});
