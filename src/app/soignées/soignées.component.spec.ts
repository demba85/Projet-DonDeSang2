import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoignéesComponent } from './soignées.component';

describe('SoignéesComponent', () => {
  let component: SoignéesComponent;
  let fixture: ComponentFixture<SoignéesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoignéesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoignéesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
