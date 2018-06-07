import { TestBed, inject } from '@angular/core/testing';

import { GroupeOplusService } from './groupe-oplus.service';

describe('GroupeOplusService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GroupeOplusService]
    });
  });

  it('should be created', inject([GroupeOplusService], (service: GroupeOplusService) => {
    expect(service).toBeTruthy();
  }));
});
