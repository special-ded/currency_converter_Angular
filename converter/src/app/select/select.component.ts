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

  rates: ExchRateObj[] = []
  toggleF: boolean = false;
  toggleS: boolean = false;
  firstCurencyName: string = "UAH";
  secondCurencyName: string = "USD";
  firstValue: number;
  secondValue: number;

  clickHandlerFirst(event?: any) {
    this.toggleF = !this.toggleF

    if (event?.target.innerText) {
      this.firstCurencyName = event?.target.innerText
    }
    if (event) this.inputHandler(event)
  }

  clickHandlerSecond(event?: any) {
    this.toggleS = !this.toggleS

    if (event?.target.innerText) {
      this.secondCurencyName = event?.target.innerText
    }
    if (event) this.inputHandler(event)
  }

  async inputHandler(event: any) {
    const secondInputValue = "secondInputValue";
    const uah = "UAH";
    const inputName: string = event.target.name;
    const secondCurencyRate = this.rates.find(el => el.cc === this.secondCurencyName)?.rate;
    const firstCurencyRate = this.rates.find(el => el.cc === this.firstCurencyName)?.rate;

    if (inputName === secondInputValue) {
      this.secondInputHandler(firstCurencyRate, secondCurencyRate, uah)
      return
    }

    this.firstInputHandler(firstCurencyRate, secondCurencyRate, uah)
  }

  firstInputHandler(firstCurencyRate: any, secondCurencyRate: any, uah: string) {

    if (this.firstCurencyName === this.secondCurencyName) {
      this.secondValue = this.firstValue
      return
    }

    if (this.firstCurencyName === uah) {
      if (secondCurencyRate) this.secondValue = this.firstValue / secondCurencyRate

    }

    if (this.secondCurencyName === uah) {
      if (firstCurencyRate) this.secondValue = this.firstValue * firstCurencyRate
    }

    if (secondCurencyRate && firstCurencyRate) this.secondValue = this.firstValue * firstCurencyRate / secondCurencyRate
  }

  secondInputHandler(firstCurencyRate: any, secondCurencyRate: any, uah: string) {

    if (this.secondCurencyName === this.firstCurencyName) {
      this.firstValue = this.secondValue
      return
    }

    if (this.secondCurencyName === uah) {
      if (firstCurencyRate) this.firstValue = this.secondValue / firstCurencyRate
    }

    if (this.firstCurencyName === uah) {
      if (secondCurencyRate) this.firstValue = this.secondValue * secondCurencyRate
    }

    if (secondCurencyRate && firstCurencyRate) this.firstValue = this.secondValue * secondCurencyRate / firstCurencyRate
  }

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
