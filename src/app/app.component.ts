import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({ selector: 'app-root', templateUrl: './app.component.html' })
export class AppComponent implements OnInit {
    title(title: any) {
      throw new Error('Method not implemented.');
    }
    postId: any;
    GetId: any;
    Delete: any;
    putId: any;
    constructor(private http: HttpClient) { }

    ngOnInit() {
      this.http.post<Article>('https://reqres.in/api/users', { name: 'morpheus' }).subscribe(data => {
          this.postId = data.id;
      })
  }
    

}
interface Article {
  id: number;
  name: string;
}
funcreate()
{
  this.http.post<Article>('https://reqres.in/api/users', { name: 'morpheus' }).subscribe(data => {
    this.postId = data.id;
})
}

funupdate()
{
  this.http.post<Article>('https://reqres.in/api/users/2', { name: 'morpheus' }).subscribe(data => {
    this.putId = data.id;
})
}
funlistuser(){
  this.http.post<Article>('https://reqres.in/api/users?page=2', { name: 'morpheus' }).subscribe(data => {
          this.GetId = data.id;
      })
}
fundelete() 
{
  this.http.post<Article>('https://reqres.in/api/users/2', { name: 'morpheus' }).subscribe(data => {
    this.Delete = data.id;
})
}
