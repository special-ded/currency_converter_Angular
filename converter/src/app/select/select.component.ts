import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {


    this.renderSelect();
    // this.initEventListeners();
  }

  selectDiv: any

  renderSelect() {
    this.selectDiv = this.getSelectTemplate();
  }

  getSelectTemplate() {

  }

  // initEventListeners() {
  //   document.querySelector('.select__list').addEventListener('click', (event) => {
  //     this.selectChoose(event.target.innerText, event.target.value);
  //   })

  //   document.querySelector(".select").addEventListener('click', (event) => {
  //     this.classListInput = ["input__value", "input__wrap", "select__icon-use", "select__icon"];

  //     if (this.classListInput.includes(event.target.className)
  //       || this.classListInput.includes(event.target.classList.value)) {
  //       this.selectToggler();
  //     }
  //   })
  // }

  // selectToggler() {
  //   this.selectDiv.classList.toggle('is-active');

  //   this.iconToggler();
  // }

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
