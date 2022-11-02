import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ExchRateObj } from './header/header.component';

@Injectable({
  providedIn: 'root'
})

export class RatesService {

  private rateURL = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchangenew?json';

  constructor(
    private http: HttpClient,
  ) {
    this.reqRates()
  }

  reqRates() {
    const request = this.http.get<ExchRateObj[]>(this.rateURL);

    return request.subscribe((val: ExchRateObj[]) => {
      console.log(val);
      return val
    })

  }
}
