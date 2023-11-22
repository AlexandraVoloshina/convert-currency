import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CurrencyService } from '../currency.service';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent implements OnInit {

  to: string = 'UAH';
  from: string = 'USD';

  inputOne: string = '0';
  inputTwo: string = '0';

  constructor(private _currencyService: CurrencyService) {}

  ngOnInit(): void {
  }

  setCurrencyOne(value: string){
    this.to = value;
    this._currencyService.getCurrency(this.to, this.from, this.inputTwo)
    .subscribe((resp: any) => {
      this.inputOne = resp.result;
    });
  }

  setCurrencyTwo(value: string){
    this.from = value;
    this._currencyService.getCurrency(this.to, this.from, this.inputOne)
    .subscribe((resp: any) => {
      this.inputTwo = resp.result;
    });
  }

  InputFrom(){
    this._currencyService.getCurrency(this.to, this.from, this.inputOne)
    .subscribe((resp: any) => {
      this.inputTwo = resp.result;
    });

  }

  InputTo(){
    this._currencyService.getCurrency(this.to, this.from, this.inputTwo)
    .subscribe((resp: any) => {
      this.inputOne = resp.result;
    });
  }
}