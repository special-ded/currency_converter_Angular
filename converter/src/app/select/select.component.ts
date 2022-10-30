import { Component, OnInit } from '@angular/core';



interface ExchRateObj {
  result: number
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
  firstCurencyName: string = "USD";
  secondCurencyName: string = "UAH";
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



  async inputHandler(event?: any) {

    console.log(event.target.value)
    if (event.target.name === "firstCurrency") {
      this.rate = await this.getExchangeRate();
      console.log(this.rate)
      console.log(this.rate.result)
      this.secondCurencyValue = this.rate.result * event.target.value

    }

    if (event.target.name === "secondCurrency") {
      this.rate = await this.getExchangeRate();
      console.log(this.rate.result)
      this.firstCurencyValue = this.rate.result * event.target.value

    }
  }


  usd: number = 0;
  eur: number = 0;

  rate: ExchRateObj = {
    result: 1
  }

  async renderRate() {
    this.rate = await this.getExchangeRate();
    return this.rate
  }


  async getExchangeRate() {
    let url = `https://api.exchangerate.host/convert?from=${this.firstCurencyName}
    &to=${this.secondCurencyName}`
    console.log(url)
    try {
      const response = await fetch(url, {
        method: 'GET',
      });
      const rate = await response.json();
      return rate;
    } catch (error) {
      console.error('Error:', error);
    }
  }


}
