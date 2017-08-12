import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sandboxthree',
  templateUrl: './sandboxthree.component.html',
  styleUrls: ['./sandboxthree.component.css']
})
export class SandboxthreeComponent implements OnInit {




  constructor() { }

  ngOnInit() {
  }

  fireEvent(e){
   // console.log("button Clicked " + greeting);
    console.log(e.target.id);
   // alert(e.target.id);
  }

}
