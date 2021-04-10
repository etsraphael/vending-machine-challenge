import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { RootStoreModule } from './root-store'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HomeComponent } from './home/home.component'
import { DatePipe } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MaterialModule } from 'src/material';
import { ConfirmationPaymentComponent } from './core/modal/confirmation-payment/confirmation-payment.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ConfirmationPaymentComponent,
  ],
  imports: [
    RootStoreModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent],
  entryComponents: [ConfirmationPaymentComponent]
})
export class AppModule { }
