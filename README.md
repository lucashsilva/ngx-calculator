
# NgxCalculator - A simple calculator for Angular projects

## Overview

The calculator uses Javascript's eval() to evaluate math expressions, generating a number value as result, which can be binded using ngModel in your application for many purposes. 

You can try the calculator online at [`http://lucashsilva.github.io/ngx-calculator/`](http://lucashsilva.github.io/ngx-calculator/) or clone the repo and run the development server.

Feel free to contribute opening a pull request :) 

#### Screenshot
![enter image description here](http://i68.tinypic.com/24edq90.png)

## Installing and using
1. Install the package from npm via command line:

```
npm install --save ngx-calculator
```

2. Add `NgxCalculatorModule` as an import of your app module: 

```
import { NgxCalculatorModule } from 'ngx-calculator';

@NgModule({
  ...
  imports: [
    NgxCalculatorModule
  ],
  ...
})
```

3. Use the component in your HTML template:

```
<ngx-calculator [(ngModel)]="value"></ngx-calculator>
```

Notice that the binding is optional and that the bind value will only change when `=` is pressed.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

<!-- ## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md). -->
