import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupeAbplusComponent } from './groupe-abplus.component';

describe('GroupeAbplusComponent', () => {
  let component: GroupeAbplusComponent;
  let fixture: ComponentFixture<GroupeAbplusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupeAbplusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupeAbplusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
