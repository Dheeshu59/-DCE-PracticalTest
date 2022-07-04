import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {

  Delete: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.post<Article>('https://reqres.in/api/users/2', { name: 'morpheus' }).subscribe(data => {
        this.Delete = data.id;
    })
}

}
interface Article {
  id: number;
  name: string;
}
