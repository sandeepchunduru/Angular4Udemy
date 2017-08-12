import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sandbox-six',
  templateUrl: './sandbox-six.component.html',
  styleUrls: ['./sandbox-six.component.css']
})
export class SandboxSixComponent implements OnInit {

  user = {
    name: '',
    email: '',
    phoneNo:''
  }

  constructor() { }

  ngOnInit() {
  }

  onSubmit({value, valid}){
    if(valid){
        console.log("Complete Object: " + value);
      console.log("Name " + value.name);
      console.log("Email " + value.email);
      console.log("Phone " + value.phone);
    }else{
      console.log("Form is Invalid");
    }
  }

}
