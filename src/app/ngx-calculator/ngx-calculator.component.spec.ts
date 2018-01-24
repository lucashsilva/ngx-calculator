import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxCalculatorComponent } from './ngx-calculator.component';

describe('NgxCalculatorComponent', () => {
  let component: NgxCalculatorComponent;
  let fixture: ComponentFixture<NgxCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
