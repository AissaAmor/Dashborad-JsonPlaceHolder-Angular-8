import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  // testButton = false;
  users;
  constructor(private Users: UsersService) { }
  ngOnInit() {
    this.Users.serviceUsers().subscribe(data => {
      console.log(data)
      this.users = data;
    });

  }
}


