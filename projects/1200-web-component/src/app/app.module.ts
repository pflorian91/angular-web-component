import {Injector, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {createCustomElement} from '@angular/elements';
import {MyForm1200Component} from "../../../my-form-1200/src/lib/my-form-1200.component";

export abstract class WebComponentModule {
  constructor(injector: Injector, component: InstanceType<any>) {
    const ngElement = createCustomElement(component, {
      injector,
    });

    customElements.define('my-form-1200-as-web-component', ngElement);
  }

  public ngDoBootstrap(): void {
  }
}

@NgModule({
  imports: [
    BrowserModule,
  ]
})
export class AppModule extends WebComponentModule {

  constructor(
    readonly injector: Injector,
  ) {
    super(injector, MyForm1200Component);
  }

}
