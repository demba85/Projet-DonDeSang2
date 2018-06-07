import { TestBed, inject } from '@angular/core/testing';

import { GroupeBMoinsService } from './groupe-b-moins.service';

describe('GroupeBMoinsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GroupeBMoinsService]
    });
  });

  it('should be created', inject([GroupeBMoinsService], (service: GroupeBMoinsService) => {
    expect(service).toBeTruthy();
  }));
});
