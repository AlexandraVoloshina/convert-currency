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

  constructor(public _currencyService: CurrencyService) {
  }

  ngOnInit(): void {
  }

  InputFrom(){

    let to  = this.fromTo.nativeElement.value;
    let from = this.fromFrom.nativeElement.value;
    let amount = this.inputTo.nativeElement.value;
    this._currencyService.getCurrency(to, from, amount).then((resp: any) => {
      this.currencyTo = resp.result;
    });

  }

  InputTo(){
  
    let to  = this.fromFrom.nativeElement.value;
    let from = this.fromTo.nativeElement.value;
    let amount = this.inputFrom.nativeElement.value;
    this._currencyService.getCurrency(to, from, amount).then((resp: any) => {
      this.currencyFrom = resp.result;
    });
  }
}