import  { Component } from  '@angular/core';
import  { Customer } from  '../Customer';

@Component({
    selector: 'sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.css']
})

export class SandboxComponent{

  imageUrl = "http://lorempixel.com/400/200";
  isImageUnchanged:boolean = false;
  name: string = 'John Doe';
  showName: boolean = true;
  greeting:number = 4;
  age: number = 30;
  hasChildren: boolean = true;
  city: any = 'Boston';
  myNumbersArray: number[] = [1,2,3];
  myStringsArray: string[] = ['Sandeep', 'Gargi', 'Aishwarya'];
  myAnyArray: any[] = ['SandeepChunduru', 40];
  myTuple: [string, number] = ['Sandy', 20];
  voidVariable: void =  undefined;
  undefinedVariable: undefined =  undefined;
  nullVariable: null = null;

  //objects
  customer: Customer;
  customers:Customer[];

  people = ['Rick', 'Daryl', 'Carl', 'Glen'];

  people2=[
    {
      firstName: 'Rick',
      lastName: 'Grimes'
    },
    {
      firstName: 'Daryl',
      lastName: 'Dixon'
    },
    {
      firstName: 'Carl',
      lastName: 'Grimes'
    },
    {
      firstName: 'Glen',
      lastName: 'Rhee'
    }

  ];

  constructor(){
    this.hasChildren = false;
    this.city = 50;
    this.myNumbersArray=[4,5,6];
    this.myStringsArray=['Sandeep', 'Chunduru'];
    this.myAnyArray=['GargiSarkar', 30];

    this.customer = {
      id: 100,
      name: 'Jamey Lannister',
      email: 'john@gmail.com'
    };

    this.customers = [
      {
        id: 100,
        name: 'Jamey Lannister',
        email: 'jamey@lannister.com'
      },
      {
        id: 100,
        name: 'John Snow',
        email: 'john@snow.com'
      },{
        id: 300,
        name: 'Sansa Stark',
        email: 'sansa@stark.com'
    }
  ];
    this.people[2] = 'Carol';
    this.people2[2].firstName = 'Sandeep';
    this.people2[2].lastName = 'Chunduru';

  }

}


