import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  // testU = false;
  // testP = false;
  constructor() { }

  ngOnInit() {
  }
}
  // testUsers(){
  //   if(this.testU=false){
  //     this.testU=true;
  //     this.testP=false;
  //   }else{
  //     this.testU=true;
  //     this.testP=false;
  //   }
    // console.log(this.testU)
    // console.log(this.testP)
  // }
  // testPosts(){
  //   if(this.testP=false){
  //     this.testP=true;
  //     this.testU=false;
  //   }else{
  //     this.testP=true;
  //     this.testU=false;
  //   }
    // this.testP = !this.testP;
    // this.testU=false;
    // console.log(this.testP)
    // console.log(this.testU)
  // }
// }
