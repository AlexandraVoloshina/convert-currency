import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  fromEURtoUAH: number = 0;
  fromEURtoUSD: number = 0;
  headers: any;

  myHeaders: any = new Headers();
  requestOptions: any;
  

  constructor(public _http: HttpClient) { 

  this.myHeaders.append("apikey", "4gIAFidlJdqLsekjSB0fJDCvylCspCAb");

  this.requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: this.myHeaders
};
  }

  getCurrency(from: string, to: string, amount: string){
    return fetch(`https://api.apilayer.com/fixer/convert?to=${to}&from=${from}&amount=${amount}`, this.requestOptions)
    .then(response => response.json())
    .then(result => result)
    .catch(error => console.log('error', error));
  }
  


}
