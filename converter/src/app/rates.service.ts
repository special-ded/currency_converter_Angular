import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ExchRateObj } from '../app/exchrateobj';

@Injectable({
  providedIn: 'root'
})

export class RatesService {

  private rateURL = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchangenew?json';

  constructor(
    private http: HttpClient
  ) { }

  reqRates() {
    return this.http.get<ExchRateObj[]>(this.rateURL);
  }
}
