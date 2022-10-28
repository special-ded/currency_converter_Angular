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
  // href: string = logo

  clickHandlerFirst() {
    this.toggleF = !this.toggleF

  }
  clickHandlerSecond() {
    this.toggleS = !this.toggleS
  }

}
