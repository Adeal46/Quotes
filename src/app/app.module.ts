import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
 import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { TimePipe } from './time.pipe';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { HighestDirective } from './highest.directive';


 @NgModule({
  declarations: [
    AppComponent
    AppComponent,
    QuoteComponent,
    QuoteDetailsComponent,
    TimePipe,
    QuoteFormComponent,
    HighestDirective
  ],
  imports: [
    BrowserModule
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
 })
 export class AppModule { }
