import { Injectable } from '@angular/core';
import { Blog } from '../model/blog';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators'
@Injectable({
  providedIn: 'root',
})
export class BlogService {
  public blogs: Blog[] = [
    
  ];

  constructor(private http: HttpClient) {
    this.getBlogs();
    console.log("call")
  }

  addBlog(blog: Blog) {
    this.blogs.push(blog)
    console.log(this.blogs)
  }

  getBlogs() {
    this.http.get('https://run.mocky.io/v3/40d1dd50-1cc9-42b0-afdd-0d75c7186fe3').pipe(catchError(this.handleError)).subscribe((val: Blog[]) => {
      this.blogs=val;
    });
  }

  private handleError(error: Response | any) {
    return null
    // return Observable.throw(error);
  }
}
