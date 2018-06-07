import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupeBmoinsComponent } from './groupe-bmoins.component';

describe('GroupeBmoinsComponent', () => {
  let component: GroupeBmoinsComponent;
  let fixture: ComponentFixture<GroupeBmoinsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupeBmoinsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupeBmoinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
