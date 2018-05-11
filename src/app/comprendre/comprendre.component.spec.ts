import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprendreComponent } from './comprendre.component';

describe('ComprendreComponent', () => {
  let component: ComprendreComponent;
  let fixture: ComponentFixture<ComprendreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComprendreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComprendreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
