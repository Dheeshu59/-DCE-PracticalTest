import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  putId: any;

    constructor(private http: HttpClient) { }

    ngOnInit() {
      this.http.post<Article>('https://reqres.in/api/users/2', { name: 'morpheus' }).subscribe(data => {
          this.putId = data.id;
      })
  }
}

interface Article {
  id: number;
  name: string;
}
