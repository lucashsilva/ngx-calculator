import { Component, EventEmitter, Output } from '@angular/core';

const DEFAULT_FIXED_POINT_NUMBER = 3;

@Component({
  selector: 'ngx-calculator',
  templateUrl: './ngx-calculator.component.html',
  styleUrls: ['./ngx-calculator.component.scss']
})
export class NgxCalculatorComponent {
  @Output() onResult: EventEmitter<number>;
  result: string;

  constructor() { 
    this.onResult = new EventEmitter();
    this.result = '';
  }

  btnClicked(btn) {
    try {
      if (btn == 'C') {
        this.result = '';
      } else if (btn == '=') {
        let number = eval(this.result);

        this.result = (number % 1? number.toFixed(DEFAULT_FIXED_POINT_NUMBER): number) || '';
        this.onResult.emit(number);
      } else {
        this.result += btn;
      }
    } catch (error) {
      this.result = '';
    }
  }
}
