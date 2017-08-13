import { Component, OnInit } from '@angular/core';
import  { DataService } from '../../services/data.service';

@Component({
  selector: 'app-sandbox-service',
  templateUrl: './sandbox-service.component.html',
  styleUrls: ['./sandbox-service.component.css']
})
export class SandboxServiceComponent implements OnInit {

  users:string[];
  constructor(public dataService:DataService)
  {
    this.users = this.dataService.getUsers();
   // console.log(this.dataService.getUsers())
  }

  ngOnInit()
  {

  }

}
