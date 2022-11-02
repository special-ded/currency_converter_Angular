import { Component, OnInit } from '@angular/core';
import { RatesService } from '../rates.service';

export interface ExchRateObj {
  rate: number;
  cc: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})

export class HeaderComponent implements OnInit {

  constructor(
    private rates: RatesService
  ) { }

  ngOnInit(): void {
    // this.renderRate()
    this.getRates()
  }

  usd: number = 0;
  eur: number = 0;
  json: ExchRateObj[] = []

  ratesqqq: any

  getRates() {
    this.ratesqqq = this.rates.reqRates()
    console.log(this.ratesqqq);

  }





  // async renderRate() {
  //   this.json = await this.getExchangeRate();
  //   this.usd = this.json[25].rate
  //   this.eur = this.json[32].rate
  // }

  // async getExchangeRate() {
  //   try {
  //     const url =
  //       'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchangenew?json';
  //     const response = await fetch(url);
  //     const json = await response.json();
  //     return json;
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // }
}
