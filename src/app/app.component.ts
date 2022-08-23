import { Component, OnInit } from '@angular/core';
import { CurrencyService } from './currency/currency.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'convert-currency';

  currentyUSDtoUAH: number = 0;
  currentyEURtoUAH: number = 0;

  constructor(public _currencyService: CurrencyService) { }


  ngOnInit(): void {
    this._currencyService.getCurrency().subscribe(data => {
      this.currentyUSDtoUAH = data.rates.UAH / data.rates.USD;
      this.currentyEURtoUAH = data.rates.UAH;
    });
  }

}
