import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {

  }

  selectDiv: any;

  toggleF: boolean = false;
  toggleS: boolean = false;
  firstCurencyName: string = "USD";
  secondCurencyName: string = "UAH";

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


}
