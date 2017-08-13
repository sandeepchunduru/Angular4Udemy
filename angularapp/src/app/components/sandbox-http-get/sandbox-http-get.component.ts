import { Component, OnInit } from '@angular/core';
import { HttpDataService } from '../../services/http-data-service.service';

@Component({
  selector: 'app-sandbox-http-get',
  templateUrl: './sandbox-http-get.component.html',
  styleUrls: ['./sandbox-http-get.component.css']
})
export class SandboxHttpGetComponent implements OnInit {
  users:any[]=[];
  user = {
    id:'',
    name: '',
    email:'',
    phone:''
  }
  isEdit: boolean = false;

  constructor(public dataService:HttpDataService)
  {
    this.dataService.getUsers().subscribe(users => {
        console.log(users);
        this.users=users;
    });
  }

  ngOnInit()
  {
  }

  onSubmit(isEdit)
  {
    if(!isEdit)
    {
      this.dataService.addUser(this.user).subscribe(user => {
        console.log(user)
        this.users.unshift(user);
      });
    }else
    {
      this.dataService.updateUser(this.user).subscribe(user => {
        for(let i = 0; i < this.users.length ; i ++)
        {
          if(this.users[i].id == this.user.id)
          {
            this.users.splice(i, 1);
          }
        }
        this.users.unshift(this.users);
      })

    }

  }

  onDeleteClick(id){
    console.log(id);
    this.dataService.deleteUser(id).subscribe(res => {
      console.log(res);
      for(let i = 0; i < this.users.length ; i ++)
      {
        if(this.users[i].id == id)
        {
          this.users.splice(i, 1);
        }
      }
    });
  }

  onEditClick(user)
  {
    this.isEdit = true;
    this.user = user;
  }

}
