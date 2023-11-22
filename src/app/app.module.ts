import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CurrencyComponent } from './currency/currency/currency.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InputFormComponent } from './currency/input-form/input-form.component';
import { FormsModule } from '@angular/forms';
import { SelectCurrencyComponent } from './currency/select-currency/select-currency.component';


@NgModule({
  declarations: [
    AppComponent,
    CurrencyComponent,
    InputFormComponent,
    SelectCurrencyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
