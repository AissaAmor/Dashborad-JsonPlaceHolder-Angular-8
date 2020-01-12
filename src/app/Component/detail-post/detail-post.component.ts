import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-detail-post',
  templateUrl: './detail-post.component.html',
  styleUrls: ['./detail-post.component.css']
})
export class DetailPostComponent implements OnInit {
  detPosts;
  constructor(private Users:UsersService,private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    // console.log(this.activatedRoute.snapshot.params.id);
    this.Users.postsComments(this.activatedRoute.snapshot.params.id).subscribe(data => {
      // console.log(data)
      this.detPosts = data;
      
    });

  }

}
