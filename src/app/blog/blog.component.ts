import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  constructor(private http:HttpClient, private data: DataService) { }
blogs:any
pageno: any
  ngOnInit() {
    this.pageno = '1' ;
    this.data.getBlogList(this.pageno).subscribe(res => {
      this.blogs = res;
      console.log(this.blogs)
    })
  }

}
