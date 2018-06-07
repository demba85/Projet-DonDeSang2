import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupeAbmoinsComponent } from './groupe-abmoins.component';

describe('GroupeAbmoinsComponent', () => {
  let component: GroupeAbmoinsComponent;
  let fixture: ComponentFixture<GroupeAbmoinsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupeAbmoinsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupeAbmoinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
