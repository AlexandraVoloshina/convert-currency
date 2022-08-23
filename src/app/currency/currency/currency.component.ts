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

  currencyFrom: number = 0;
  currencyTo: number = 0;
  EUR: number = 0;
  valueDefaultTo: number = 0;
  valueDefaultFrom: number = 0;

  constructor(public _currencyService: CurrencyService) {
  }

  ngOnInit(): void {
  }

  InputFrom(){
    this.valueDefaultTo = 0;
    this._currencyService.getCurrency().subscribe(data => {
      this.valueDefaultTo = data.rates.UAH / data.rates.USD;
      this.EUR  = data.rates.UAH;
      this.currencyTo = this.valueDefaultTo * +this.inputTo.nativeElement.value;
    });
  }

  InputTo(){
    this.valueDefaultFrom = 0;
    this._currencyService.getCurrency().subscribe(data => {
      this.valueDefaultFrom =  data.rates.USD / data.rates.UAH;
      this.EUR  = data.rates.UAH;
      this.currencyFrom = (data.rates.UAH / data.rates.USD) * +this.inputFrom.nativeElement.value;
    });
  }

  selectCurrencyFrom(value: any){
    switch (value) {
      case 'USD':
        this.currencyTo = this.valueDefaultTo * +this.inputTo.nativeElement.value;
        break;
      case 'EUR':
        this.currencyTo = this.EUR;
        break;
      case 'UAH':
        this.currencyTo = +this.inputTo.nativeElement.value;
          break;
      default: return;
    }
  }

  selectCurrencyTo(value: any){
    switch (value) {
      case 'USD':
        this.currencyFrom = +this.inputFrom.nativeElement.value;
        break;
      case 'EUR':
        this.currencyFrom = this.EUR;
        break;
      case 'UAH':
        this.currencyFrom = +this.inputFrom.nativeElement.value;
          break;
      default: return;
    }
  }

}
