import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.css']
})
export class DetailUserComponent implements OnInit {
  detusers;
  dup;

  constructor(private Users: UsersService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // console.log(this.activatedRoute.snapshot.params.id);
    this.Users.detailUsers(this.activatedRoute.snapshot.params.id).subscribe(data => {
      console.log(data)
      this.detusers = data;
    });
    this.Users.detailUsersPosts(this.activatedRoute.snapshot.params.id).subscribe(data => {
      console.log(data)
      this.dup = data;
      console.log(this.dup);
        });
  }
}