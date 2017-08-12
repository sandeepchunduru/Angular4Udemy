import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SandboxComponent1 } from './components/sandbox1.components';
import { SandboxComponent } from './components/sandbox/sandbox.components';
import { SandboxtwoComponent } from './components/sandboxtwo/sandboxtwo.component';
import { SandboxthreeComponent } from './components/sandboxthree/sandboxthree.component';
import { SandboxFourComponent } from './components/sandbox-four/sandbox-four.component';
import { SandboxFiveComponent } from './components/sandbox-five/sandbox-five.component';



@NgModule({
  declarations: [
    AppComponent,
    SandboxComponent1,
    SandboxComponent,
    SandboxtwoComponent,
    SandboxthreeComponent,
    SandboxFourComponent,
    SandboxFiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
