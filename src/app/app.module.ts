import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DisplayUserComponent } from './display-user/display-user.component';
import { HeroService } from './hero.service';
import { BootstrapExamplesComponent } from './bootstrap-examples/bootstrap-examples.component';
import { ObservablesComponent } from './observables/observables.component';
import { MyusersComponent } from './myusers/myusers.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AppRoutingModule } from './app-routing/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    DisplayUserComponent,
    BootstrapExamplesComponent,
    ObservablesComponent,
    MyusersComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],

  providers:[HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
