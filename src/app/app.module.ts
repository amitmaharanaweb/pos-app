import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KitchendashboardComponent } from './kitchendashboard/kitchendashboard.component';
import { BillingdashboardComponent } from './billingdashboard/billingdashboard.component';
import { CustomerdashboardComponent } from './customerdashboard/customerdashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    KitchendashboardComponent,
    BillingdashboardComponent,
    CustomerdashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
