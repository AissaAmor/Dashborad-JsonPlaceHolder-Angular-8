import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts;
  constructor(private Users: UsersService) { }

  ngOnInit() {
    this.Users.servicePosts().subscribe(data => {
      // console.log(data)
      this.posts = data;
    })
  }
}
