import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sandboxtwo',
  templateUrl: './sandboxtwo.component.html',
  styleUrls: ['./sandboxtwo.component.css']
})
export class SandboxtwoComponent implements OnInit {

  isSpecial: boolean = true;
  canSave: boolean = true;
  currentClasses={};
  currentStyles: {};
  total = 500;
  fee = 1;
  //pipes
  birthDay = new Date(1987, 1, 15);

  constructor() {
    this.setCurrentClasses();
    this.setCurrentStyles();
  }

  ngOnInit() {
  }
//set the css class name = true to enable css styling
  setCurrentClasses(){
    this.currentClasses={
      savable:this.canSave,
      special:this.isSpecial
    };
  }

  setCurrentStyles(){
    this.currentStyles={
      'font-style': this.canSave ? 'italic' : 'normal',
      'font-size' : this.isSpecial ? '24px' : '12px'
    };
  }

}
