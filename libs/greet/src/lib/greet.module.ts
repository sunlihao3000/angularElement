import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GreetComponent } from './greet/greet.component';
import { createCustomElement } from '@angular/elements';

import { createNg1Wrapper } from 'create-ng1-wrapper';
import * as angular from 'angular';

@NgModule({
  imports: [BrowserModule, CommonModule],
  declarations: [GreetComponent],
  exports: [GreetComponent],
  //bootstrap: [GreetComponent], // ng2
  entryComponents: [GreetComponent]
})
export class GreetModule {
  //ng1

  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    const elements: any[] = [[GreetComponent, 'greet-ce']];
    const dcWebComponentsModule = angular.module('ng1WebComponents', []);
    for (const [component, name] of elements) {
      const el = createCustomElement(component, { injector: this.injector });
      customElements.define(name, el);
      const ng1El = createNg1Wrapper(name, component, {
        injector: this.injector
      });
      dcWebComponentsModule.component(`greetCeWrapper`, ng1El);
    }
  }

  // ng1
}

