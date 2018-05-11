import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupeOPlusComponent } from './groupe-o-plus.component';

describe('GroupeOPlusComponent', () => {
  let component: GroupeOPlusComponent;
  let fixture: ComponentFixture<GroupeOPlusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupeOPlusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupeOPlusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
