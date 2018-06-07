import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupeAmoinsComponent } from './groupe-amoins.component';

describe('GroupeAmoinsComponent', () => {
  let component: GroupeAmoinsComponent;
  let fixture: ComponentFixture<GroupeAmoinsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupeAmoinsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupeAmoinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
