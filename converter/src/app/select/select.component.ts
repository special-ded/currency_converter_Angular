import { Component, OnInit } from '@angular/core';

interface ExchRateObj {
  rate: number;
  cc: string;
}

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})

export class SelectComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    this.renderRate()
  }

  selectDiv: any;
  toggleF: boolean = false;
  toggleS: boolean = false;
  firstCurencyName: string = "UAH";
  secondCurencyName: string = "USD";
  firstCurencyValue: number = 0;
  secondCurencyValue: number = 0;


  clickHandlerFirst(event?: any) {
    this.toggleF = !this.toggleF

    if (event?.target.innerText) {
      this.firstCurencyName = event?.target.innerText
    }
  }

  clickHandlerSecond(event?: any) {
    this.toggleS = !this.toggleS

    if (event?.target.innerText) {
      this.secondCurencyName = event?.target.innerText
    }
  }

  async inputHandler(event: any) {
    const secondCurencyNameRate = this.rate.find(el => el.cc === this.secondCurencyName)?.rate
    const firstCurencyNameRate = this.rate.find(el => el.cc === this.firstCurencyName)?.rate

    if (event.target.name === "firstCurrency") {



      if (secondCurencyNameRate) this.secondCurencyValue = event.target.value / secondCurencyNameRate
    }

    if (event.target.name === "secondCurrency") {

      console.log(this.rate)
      this.firstCurencyValue = event.target.value

    }
  }


  usd: number = 0;
  eur: number = 0;

  rate: ExchRateObj[] = []

  async renderRate() {
    this.rate = await this.getExchangeRate();
    return this.rate
  }


  async getExchangeRate() {

    const url =
      'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchangenew?json';
    try {
      const response = await fetch(url);
      const rate = await response.json();
      return rate;
    } catch (error) {
      console.error('Error:', error);
    }
  }


}
