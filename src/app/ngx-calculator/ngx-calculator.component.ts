import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => NgxCalculatorComponent),
    multi: true
};

const DEFAULT_FIXED_POINT_NUMBER = 3;

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
    this.result = '';
  }

  btnClicked(btn) {
    try {
      if (btn == 'C') {
        this.result = '';
        
        this.onChangeCallback(0);
      } else if (btn == '=') {
        this.result = this.stringifiedValue;

        this.onChangeCallback(this.value);
      } else {
        this.result = this.result == ''? btn : (this.result + btn);
      }
    } catch (error) {
      this.result = '';
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
    return (this.value % 1? this.value.toFixed(DEFAULT_FIXED_POINT_NUMBER): this.value) || '';
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
