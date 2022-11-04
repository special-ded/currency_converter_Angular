import { Component, OnInit } from '@angular/core';
import { ExchRateObj } from '../exchrateobj';
import { RatesService } from '../rates.service';


@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})

export class SelectComponent implements OnInit {
  constructor(
    private exchRates: RatesService
  ) { }

  ngOnInit(): void { }

  rates: ExchRateObj[] = []
  secondInputValue: string = "secondInputValue";
  uah: string = "UAH";
  toggleF: boolean = false;
  toggleS: boolean = false;
  firstCurrencyName: string = "UAH";
  secondCurrencyName: string = "USD";
  firstValue: number = 1;
  secondValue: number;
  secondCurrencyRate: number | undefined;
  firstCurrencyRate: number | undefined = 0;


  getRates(event: Event) {
    this.exchRates.reqRates()
      .subscribe((val: ExchRateObj[]) => {

        this.rates = val;
        this.secondCurrencyRate = this.rates.find(el => el.cc === this.secondCurrencyName)?.rate;
        this.firstCurrencyRate = this.rates.find(el => el.cc === this.firstCurrencyName)?.rate;

        if ((<HTMLTextAreaElement>event?.target).name === this.secondInputValue) {
          this.secondInputHandler(this.firstCurrencyRate, this.secondCurrencyRate, this.uah)
          return
        }
        this.firstInputHandler(this.firstCurrencyRate, this.secondCurrencyRate, this.uah)
      })
  }

  clickHandlerFirst(event?: MouseEvent) {
    this.toggleF = !this.toggleF;

    if ((<HTMLTextAreaElement>event?.target).innerText) {
      this.firstCurrencyName = (<HTMLTextAreaElement>event?.target).innerText
    }
    if (event) this.inputHandler(event)
  }

  clickHandlerSecond(event?: MouseEvent) {
    this.toggleS = !this.toggleS;

    if ((<HTMLTextAreaElement>event?.target).innerText) {
      this.secondCurrencyName = (<HTMLTextAreaElement>event?.target).innerText
    }
    if (event) this.inputHandler(event)
  }

  inputHandler(event: Event) {
    this.getRates(event)
  }

  firstInputHandler(firstCurencyRate: number | undefined, secondCurencyRate: number | undefined, uah: string) {

    if (this.firstCurrencyName === this.secondCurrencyName) {
      this.secondValue = this.firstValue
      return
    }

    if (this.firstCurrencyName === uah) {
      if (secondCurencyRate) this.secondValue = this.firstValue / secondCurencyRate
      return
    }

    if (this.secondCurrencyName === uah) {
      if (firstCurencyRate) this.secondValue = this.firstValue * firstCurencyRate
      return
    }

    if (secondCurencyRate && firstCurencyRate) this.secondValue = this.firstValue * (firstCurencyRate / secondCurencyRate)
  }

  secondInputHandler(firstCurencyRate: number | undefined, secondCurencyRate: number | undefined, uah: string) {

    if (this.secondCurrencyName === this.firstCurrencyName) {
      this.firstValue = this.secondValue
      return
    }

    if (this.secondCurrencyName === uah) {
      if (firstCurencyRate) this.firstValue = this.secondValue / firstCurencyRate
    }

    if (this.firstCurrencyName === uah) {
      if (secondCurencyRate) this.firstValue = this.secondValue * secondCurencyRate
    }

    if (secondCurencyRate && firstCurencyRate) this.firstValue = this.secondValue * secondCurencyRate / firstCurencyRate
  }
}
