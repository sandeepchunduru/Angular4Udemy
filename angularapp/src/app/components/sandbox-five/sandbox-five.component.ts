import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sandbox-five',
  templateUrl: './sandbox-five.component.html',
  styleUrls: ['./sandbox-five.component.css']
})
export class SandboxFiveComponent implements OnInit {

  name: string='';
  age: number = 0;
  users:string[] = ['John', 'Mary', 'Kevin'];

  constructor() {
    this.name="Sandeep Chunduri";
    this.age=30;

  }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.name);
    this.users.push(this.name);
    this.name='';
  }

}
