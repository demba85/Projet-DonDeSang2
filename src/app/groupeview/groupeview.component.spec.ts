import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupeviewComponent } from './groupeview.component';

describe('GroupeviewComponent', () => {
  let component: GroupeviewComponent;
  let fixture: ComponentFixture<GroupeviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupeviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupeviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
