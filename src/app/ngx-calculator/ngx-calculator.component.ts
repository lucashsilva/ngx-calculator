import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => NgxCalculatorComponent),
    multi: true
};

const DEFAULT_FIXED_POINT_NUMBER = 3;
const ERROR_TEXT = 'Error';
const EMPTY_STRING = '';

const BUTTON_CLEAR = 'C';
const BUTTON_EQUAL = '=';

const noop = () => { };

@Component({
  selector: 'ngx-calculator',
  templateUrl: './ngx-calculator.component.html',
  styleUrls: ['./ngx-calculator.component.scss'],
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class NgxCalculatorComponent implements ControlValueAccessor {
  result: string;
  disabled: boolean;

  private onTouchedCallback: () => void = noop;
  private onChangeCallback: (_: any) => void = noop;

  constructor() { 
    this.result = EMPTY_STRING;
  }

  btnClicked(btn) {
    try {
      if (btn == BUTTON_CLEAR) {
        this.result = EMPTY_STRING;
        
        this.onChangeCallback(0);
      } else if (btn == BUTTON_EQUAL) {
        this.result = this.stringifiedValue;

        this.onChangeCallback(this.value || 0);
      } else {
        this.result = (this.result == EMPTY_STRING || this.result == ERROR_TEXT)? btn : (this.result + btn);
      }
    } catch (error) {
      this.result = ERROR_TEXT;
    }
  }

  get value(): any {
    return eval(this.result);
  };

  set value(v: any) {
    if (v !== this.value) {
      this.result = v;

      this.onChangeCallback(v);
    }
  }

  get stringifiedValue() {
    return (this.value % 1? this.value.toFixed(DEFAULT_FIXED_POINT_NUMBER): this.value) || EMPTY_STRING;
  }

  writeValue(obj: any): void {
    this.value = obj || 0;
  }

  registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouchedCallback = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onBlur() {
    this.onTouchedCallback();
  }
}
