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

  clickHandlerFirst() {
    this.toggleF = !this.toggleF
  }
  clickHandlerSecond() {
    this.toggleS = !this.toggleS
  }

  getSelectTemplate() {

  }


  // selectChoose(text, value) {
  //   document.querySelector('.input__value').value = text;

  //   this.selectDiv.classList.remove('is-active');
  //   this.iconToggler();
  //   this.onSelectChange(value);
  // }

  // iconToggler() {
  //   this.paginatorIconLink = document.querySelector(".select__icon-use");

  //   this.paginatorIconLink.href.baseVal = "./assets/images/sprite.svg#icon-arrow-default";

  //   if (this.selectDiv.className === "select is-active") {
  //     this.paginatorIconLink.href.baseVal = "./assets/images/sprite.svg#icon-arrow-active";
  //   }
  // }

  // async onSelectChange(value) {
  //   const app = new App()
  //   const data = await app.setSliderData(value);

  //   app.initSlider(data)
  // }

}
