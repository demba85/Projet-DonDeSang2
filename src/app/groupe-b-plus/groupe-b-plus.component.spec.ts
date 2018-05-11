import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupeBPlusComponent } from './groupe-b-plus.component';

describe('GroupeBPlusComponent', () => {
  let component: GroupeBPlusComponent;
  let fixture: ComponentFixture<GroupeBPlusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupeBPlusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupeBPlusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
