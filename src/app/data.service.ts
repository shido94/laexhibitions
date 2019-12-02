import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  baseurl = 'https://dmi.vistaconnect.com/dmi-clubbed-backend/api/'
 blogUrl = "https://dmi.vistaconnect.com/live/api/"

  //BLOG LISTING POST METHOD

  getBlogList(pageno){ 
    //BLOG LISTING API
    return this.http.post(this.blogUrl + 'bloglist' , {pageno})
  }

  getBlogPages(){  
    //BLOG PAGINATION API
    return this.http.get(this.blogUrl + 'blogpaginglist')
  }

  // BLOG DETAILS BY == ID   === METHOD TYPE POST
  getBlogDetails(blog_id){
    return this.http.post(this.blogUrl + 'blogsingleview' , { blog_id })
  }


  
  // SEARCH IN API METHOD TYPE == POST

  getKBdata(){
    return this.http.get(this.baseurl + 'knowledgebase/knowledgebaselist')
  }
  getKBsearch(search,pageno){
    return this.http.post(this.baseurl + 'knowledgebase/articlesearch', {search,pageno })
  }


}


