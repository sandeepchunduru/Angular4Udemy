import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-sandbox-observables',
  templateUrl: './sandbox-observables.component.html',
  styleUrls: ['./sandbox-observables.component.css']
})
export class SandboxObservablesComponent implements OnInit {

  data: any[]=[];
  constructor(public dataService:DataService)
  {
    this.dataService.getData().subscribe(data => {
     // console.log(data);
      this.setData(data)
    })
  }

  ngOnInit()
  {
  }

  setData(data){
    this.data.push(data);
  }

}
