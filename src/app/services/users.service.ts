import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class UsersService {
  constructor(private http: HttpClient) {}
  serviceUsers() {
    return this.http.get("https://jsonplaceholder.typicode.com/users");
  }
  detailUsers(id) {
    return this.http.get("https://jsonplaceholder.typicode.com/users/" + id);
  }
  detailUsersPosts(id) {
    return this.http.get(
      "https://jsonplaceholder.typicode.com/posts?userId=" + id
    );
  }
  servicePosts() {
    return this.http.get("https://jsonplaceholder.typicode.com/posts");
  }
  postsComments(id) {
    return this.http.get(
      "https://jsonplaceholder.typicode.com/comments?postId=" + id
    );
  }
}
