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
    this.getRates()
  }

  usd: number = 0;
  eur: number = 0;
  json: ExchRateObj[] = []

  getRates() {
    this.rates.reqRates()
      .subscribe((val: ExchRateObj[]) => {
        this.json = val
        this.usd = this.json[25].rate
        this.eur = this.json[32].rate
      })
  }
}
