import { TestBed, inject } from '@angular/core/testing';

import { GroupeBPlusService } from './groupe-b-plus.service';

describe('GroupeBPlusService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GroupeBPlusService]
    });
  });

  it('should be created', inject([GroupeBPlusService], (service: GroupeBPlusService) => {
    expect(service).toBeTruthy();
  }));
});
