import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CurrencyService } from '../currency.service';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent implements OnInit {

  @ViewChild('inputTo') inputTo: any;
  @ViewChild('inputFrom') inputFrom: any;

  @ViewChild('fromTo') fromTo: any;
  @ViewChild('fromFrom') fromFrom: any;

  currencyFrom: number = 0;
  currencyTo: number = 0;
  EUR: number = 0;
  USD: number = 0;
  valueDefault: number = 0;

  constructor(public _currencyService: CurrencyService) {
  }

  ngOnInit(): void {
    this._currencyService.getCurrency().subscribe(data => {
      this.valueDefault = data.rates.USD / data.rates.UAH;
      this.EUR = data.rates.UAH;
      this.USD = data.rates.USD;
    });
  }

  roundValue = (value: number) => Math.round((value) * 100) / 100;

  InputFrom(){
    if(this.fromTo.nativeElement.value === 'UAH'){
      this.currencyTo = this.roundValue(this.valueDefault * +this.inputTo.nativeElement.value);
    }
    if(this.fromTo.nativeElement.value === 'USD'){
      this.currencyTo = this.roundValue(+this.inputTo.nativeElement.value);
    }
    if(this.fromTo.nativeElement.value === 'EUR'){
      this.currencyTo = this.roundValue(+this.EUR);
    }

  }

  InputTo(){
    if(this.fromFrom.nativeElement.value === 'USD'){
      this.currencyFrom = this.roundValue(this.valueDefault * +this.inputFrom.nativeElement.value);
    }
    if(this.fromFrom.nativeElement.value === 'UAH'){
      this.currencyFrom = this.roundValue(+this.inputFrom.nativeElement.value);
    }
    if(this.fromFrom.nativeElement.value === 'EUR'){
      this.currencyFrom = this.roundValue(+this.inputFrom.nativeElement.value * this.USD);
    }
  }

  selectCurrencyFrom(value: string){
    if(this.fromTo.nativeElement.value === 'UAH'){
      switch (value) {
        case 'USD':
          this.currencyTo = this.roundValue(this.valueDefault * +this.inputTo.nativeElement.value);
          break;
        case 'EUR':
          this.currencyTo = this.roundValue(+this.inputTo.nativeElement.value / this.EUR);
          break;
        case 'UAH':
          this.currencyTo = this.roundValue(+this.inputTo.nativeElement.value);
            break;
        default: return;
      }
    }
    if(this.fromTo.nativeElement.value === 'USD'){
      switch (value) {
        case 'USD':
          this.currencyTo = this.roundValue(+this.inputTo.nativeElement.value);
          break;
        case 'EUR':
          this.currencyTo = this.roundValue(+this.inputTo.nativeElement.value * this.USD);
          break;
        case 'UAH':
          this.currencyTo = this.roundValue(this.valueDefault * +this.inputTo.nativeElement.value);
            break;
        default: return;
      }
    }
    if(this.fromTo.nativeElement.value === 'EUR'){
      switch (value) {
        case 'USD':
          this.currencyTo = this.roundValue(+this.inputTo.nativeElement.value * this.USD);
          break;
        case 'EUR':
          this.currencyTo = this.roundValue(+this.inputTo.nativeElement.value);
          break;
        case 'UAH':
          this.currencyTo = this.roundValue(+this.inputTo.nativeElement.value * +this.EUR);
            break;
        default: return;
      }
    }
  }

  selectCurrencyTo(value: string){
    if(this.fromFrom.nativeElement.value === 'USD'){
      switch (value) {
        case 'USD':
          this.currencyFrom = this.roundValue(+this.inputFrom.nativeElement.value);
          break;
        case 'EUR':
          this.currencyFrom = this.roundValue(+this.inputFrom.nativeElement.value * this.USD);
          break;
        case 'UAH':
          this.currencyFrom = this.roundValue(+this.inputFrom.nativeElement.value);
            break;
        default: return;
      }
    }
    if(this.fromFrom.nativeElement.value === 'UAH'){
      switch (value) {
        case 'USD':
          this.currencyFrom = this.roundValue(this.valueDefault * +this.inputFrom.nativeElement.value);
          break;
        case 'EUR':
          this.currencyFrom = this.roundValue(+this.inputFrom.nativeElement.value * this.USD);
          break;
        case 'UAH':
          this.currencyFrom = this.roundValue(+this.inputFrom.nativeElement.value);
            break;
        default: return;
      }
    }
    if(this.fromFrom.nativeElement.value === 'EUR'){
      switch (value) {
        case 'USD':
          this.currencyFrom = this.roundValue(+this.inputFrom.nativeElement.value * this.USD);
          break;
        case 'EUR':
          this.currencyFrom = this.roundValue(+this.inputFrom.nativeElement.value);
          break;
        case 'UAH':
          this.currencyFrom = this.roundValue(+this.inputFrom.nativeElement.value * +this.EUR);
            break;
        default: return;
      }
    }

  }

}
