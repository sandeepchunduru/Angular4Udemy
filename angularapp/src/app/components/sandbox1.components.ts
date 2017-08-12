import  { Component } from  '@angular/core';
import {ajaxGet} from "rxjs/observable/dom/AjaxObservable";

@Component({
    selector: 'sandbox1',
  template: `
   <h1>{{name}} is {{age}} years old</h1>
  <h2>My name is {{person.firstName}} {{person.lastName}}</h2>
    <ul>
      <li>Hello {{name}}</li>
      <li>My Age {{ showAge() }}</li>
    </ul>
  `
})

export class SandboxComponent1{
  name = 'John Doe';
  age = 30;
  person={
   firstName:'Sandeep',
    lastName:'Chunduru'
  };

  constructor() {
    console.log("Constructor ran");
    //   this.age = this.age + 6;
    this.hasBirthday();
    this.hasBirthday();
  }

  hasBirthday(){
    this.age +=1;
  }

  showAge(){
    return this.age;
  }
}
