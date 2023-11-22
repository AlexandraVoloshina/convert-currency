import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  fromEURtoUAH: number = 0;
  fromEURtoUSD: number = 0;

  constructor(public _http: HttpClient) { }

  getCurrency(from: string, to: string, amount: string){

    const headers = new HttpHeaders().set('apikey', environment.apiKey);
    return this._http.get(`https://api.apilayer.com/fixer/convert?to=${to}&from=${from}&amount=${amount}`, { headers: headers });
  }
  


}
