import { Component, OnInit } from '@angular/core';
import { CurrencyService } from './currency/currency.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  title = 'convert-currency';

  currentyUSDtoUAH: any = 0;
  currentyEURtoUAH: any = 0;


  constructor(public _currencyService: CurrencyService) {
    
   }


  ngOnInit(): void {

    this._currencyService.getCurrency('USD', 'UAH', "1").subscribe((resp: any) => {
      this.currentyUSDtoUAH = resp.result;
    });
    this._currencyService.getCurrency('EUR', 'UAH', "1").subscribe((resp: any) => {
      this.currentyEURtoUAH = resp.result;
    });
  }

}
