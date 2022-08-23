import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  fromEURtoUAH: number = 0;
  fromEURtoUSD: number = 0;

  constructor(public _http: HttpClient) { }

  getCurrency(): Observable<any> {
    //return this._http.get(`https://free.currconv.com/api/v7/convert?apiKey=cd2ff852330c08894153&q=${fromCurrency}_${toCurrency}&compact=ultra`);
    return this._http.get('https://api.exchangerate.host/latest');
  }
}
