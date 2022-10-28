import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.getExchangeRate();
  }

  usd: number = 0;
  json = [];

  async aaa() {
    this.json = await this.getExchangeRate();
    this.usd = await this.getExchangeRate();
    console.log();
  }

  //  eur = json[25].rate

  async getExchangeRate() {
    try {
      const USDurl =
        'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchangenew?json?valcode=USD&date=20201028';
      const UERurl =
        'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchangenew?json?valcode=EUR&date=20201028';
      const url =
        'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchangenew?json';
      const response = await fetch(url);
      const json = await response.json();
      console.log(json);

      return json;
    } catch (error) {
      console.error('Error:', error);
    }
  }
}
