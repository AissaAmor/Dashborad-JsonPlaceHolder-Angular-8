import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UsersService } from './services/users.service';
import { HttpClientModule } from '@angular/common/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './Component/users/users.component';
import { PostsComponent } from './Component/posts/posts.component';
import { IndexComponent } from './component/index/index.component';
import { DetailUserComponent } from './Component/detail-user/detail-user.component';
import { DetailPostComponent } from './Component/detail-post/detail-post.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    PostsComponent,
    IndexComponent,
    DetailUserComponent,
    DetailPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
