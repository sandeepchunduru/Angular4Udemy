import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sandbox-four',
  templateUrl: './sandbox-four.component.html',
  styleUrls: ['./sandbox-four.component.css']
})
export class SandboxFourComponent implements OnInit {

  text:string = 'Hello World';
  value: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  changeValue(){
   // this.value=false;
    this.value = !this.value;
    this.text='Goodbye World';
  }

  fireEvent(e){
    console.log(e.type);
  }

  changeText(e){
  this.text = e.target.value;
  }

}
