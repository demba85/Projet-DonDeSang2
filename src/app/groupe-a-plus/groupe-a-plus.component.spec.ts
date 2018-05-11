import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupeAPlusComponent } from './groupe-a-plus.component';

describe('GroupeAPlusComponent', () => {
  let component: GroupeAPlusComponent;
  let fixture: ComponentFixture<GroupeAPlusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupeAPlusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupeAPlusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
