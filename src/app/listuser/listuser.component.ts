import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.scss']
})
export class ListuserComponent implements OnInit {

  GetId: any;

    constructor(private http: HttpClient) { }

    ngOnInit() {
      this.http.post<Article>('https://reqres.in/api/users?page=2', { name: 'morpheus' }).subscribe(data => {
          this.GetId = data.id;
      })
  }
}
interface Article {
  id: number;
  name: string;
}