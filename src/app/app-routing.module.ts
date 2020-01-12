import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './Component/users/users.component';
import { PostsComponent } from './Component/posts/posts.component';
import { DetailUserComponent } from './Component/detail-user/detail-user.component';
import { DetailPostComponent } from './Component/detail-post/detail-post.component';



const routes: Routes = [
  {path:'users',component:UsersComponent},
  {path:'posts',component:PostsComponent},
  {path:'users/:id',component:DetailUserComponent},
  {path:'posts/:id',component:DetailPostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
