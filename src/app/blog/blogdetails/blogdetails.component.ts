import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from 'src/app/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blogdetails',
  templateUrl: './blogdetails.component.html',
  styleUrls: ['./blogdetails.component.scss']
})
export class BlogdetailsComponent implements OnInit {

  blogDetail:any 
  description:any 

  constructor(
    private http:HttpClient,
    private data:DataService,
    private route:ActivatedRoute
  ) { 
    //this.route.params.subscribe(params => this.blogdetails = params.id)
    this.route.params.subscribe(params => this.blogDetail = params.id)
  }


  ngOnInit() {
    this.data.getBlogDetails(this.blogDetail).subscribe(
      data => {this.blogDetail = data
        console.log(this.blogDetail) 
      }   
    )

    // PRINT JSON INTO HTML
    this.description = this.blogDetail[0].blog_description


  }

}
