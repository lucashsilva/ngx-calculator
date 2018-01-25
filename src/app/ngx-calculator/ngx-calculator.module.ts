import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxCalculatorComponent } from './ngx-calculator.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    NgxCalculatorComponent,
    FormsModule
  ],
  declarations: [
    NgxCalculatorComponent
  ]
})
export class NgxCalculatorModule { }
