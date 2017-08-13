// Angular Libraries in Imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//import { RouterModule } from '@angular';

//Component Libraries in Declarations
import { AppComponent } from './app.component';
import { SandboxComponent1 } from './components/sandbox1.components';
import { SandboxComponent } from './components/sandbox/sandbox.components';
import { SandboxtwoComponent } from './components/sandboxtwo/sandboxtwo.component';
import { SandboxthreeComponent } from './components/sandboxthree/sandboxthree.component';
import { SandboxFourComponent } from './components/sandbox-four/sandbox-four.component';
import { SandboxFiveComponent } from './components/sandbox-five/sandbox-five.component';
import { SandboxSixComponent } from './components/sandbox-six/sandbox-six.component';
import { SandboxServiceComponent } from './components/sandbox-service/sandbox-service.component';
import { SandboxObservablesComponent } from './components/sandbox-observables/sandbox-observables.component';
//Service Libraries in Providers
import { DataService } from './services/data.service';
import { HttpDataService } from './services/http-data-service.service';
import { SandboxHttpGetComponent } from './components/sandbox-http-get/sandbox-http-get.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NavbarComponent } from './components/navbar/navbar.component';
//import {Routes} from "@angular/router/src";

// const appRoutes: Routes= [
//   {path:'' , component:HomeComponent},
//   {path:'about' , component:AboutComponent}
//
// ];

@NgModule({
  declarations: [
    AppComponent,
    SandboxComponent1,
    SandboxComponent,
    SandboxtwoComponent,
    SandboxthreeComponent,
    SandboxFourComponent,
    SandboxFiveComponent,
    SandboxSixComponent,
    SandboxServiceComponent,
    SandboxObservablesComponent,
    SandboxHttpGetComponent,
    HomeComponent,
    AboutComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
   // RouterModule.forRoot(appRoutes)
  ],
  providers: [
    DataService,
    HttpDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {


}
