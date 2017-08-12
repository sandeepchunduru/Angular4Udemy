import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SandboxComponent1 } from './components/sandbox1.components';
import { SandboxComponent } from './components/sandbox/sandbox.components';

@NgModule({
  declarations: [
    AppComponent,
    SandboxComponent1,
    SandboxComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
