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

  toggleF: boolean = false;
  toggleS: boolean = false;
  firstCurencyName: string = "UAH";
  secondCurencyName: string = "USD";
  firstValue: number = 0;
  secondValue: number = 0;


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
    if (event) this.inputHandler(event)
  }

  async inputHandler(event: any) {
    console.log(this.secondCurencyName);
    console.log(this.firstValue);
    const firstInputValue = "firstInputValue"
    const secondInputValue = "secondInputValue"
    const inputName: string = event.target.name;

    const secondCurencyNameRate = this.rates.find(el => el.cc === this.secondCurencyName)?.rate
    const firstCurencyNameRate = this.rates.find(el => el.cc === this.firstCurencyName)?.rate

    if (this.firstCurencyName === this.secondCurencyName) {
      this.secondValue = this.firstValue
      return
    }

    if (secondCurencyNameRate) this.secondValue = this.firstValue / secondCurencyNameRate


    if (inputName === secondInputValue) {
      this.firstValue = this.secondValue

    }
  }

  usd: number = 0;
  eur: number = 0;
  rates: ExchRateObj[] = []

  async renderRate() {
    this.rates = await this.getExchangeRate();
    return this.rates
  }

  async getExchangeRate() {
    const url =
      'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchangenew?json';
    try {
      const response = await fetch(url);
      const rates = await response.json();
      return rates;
    } catch (error) {
      console.error('Error:', error);
    }
  }

}
