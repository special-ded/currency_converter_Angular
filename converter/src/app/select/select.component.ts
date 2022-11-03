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
  firstCurencyName: string = "UAH";
  secondCurencyName: string = "USD";
  firstValue: number = 1;
  secondValue: number;


  secondCurencyRate: number | undefined;
  firstCurencyRate: number | undefined = 0;

  getRates(event: any) {
    this.exchRates.reqRates()
      .subscribe((val: ExchRateObj[]) => {

        this.rates = val;
        this.secondCurencyRate = this.rates.find(el => el.cc === this.secondCurencyName)?.rate;
        this.firstCurencyRate = this.rates.find(el => el.cc === this.firstCurencyName)?.rate;

        if (event.target.name === this.secondInputValue) {
          this.secondInputHandler(this.firstCurencyRate, this.secondCurencyRate, this.uah)
          return
        }
        this.firstInputHandler(this.firstCurencyRate, this.secondCurencyRate, this.uah)
      })
  }

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

  inputHandler(event: any) {
    this.getRates(event)
  }

  firstInputHandler(firstCurencyRate: number | undefined, secondCurencyRate: number | undefined, uah: string) {

    if (this.firstCurencyName === this.secondCurencyName) {
      this.secondValue = this.firstValue
      return
    }

    if (this.firstCurencyName === uah) {
      if (secondCurencyRate) this.secondValue = this.firstValue / secondCurencyRate
      return
    }

    if (this.secondCurencyName === uah) {
      if (firstCurencyRate) this.secondValue = this.firstValue * firstCurencyRate
      return
    }

    if (secondCurencyRate && firstCurencyRate) this.secondValue = this.firstValue * (firstCurencyRate / secondCurencyRate)
  }

  secondInputHandler(firstCurencyRate: number | undefined, secondCurencyRate: number | undefined, uah: string) {

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

}
