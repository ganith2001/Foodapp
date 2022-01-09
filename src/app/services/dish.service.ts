import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';
import {map} from 'rxjs/operators';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
//import { Subject } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class DishService {
  //private posts: Dish[] = [];
  //private postsUpdated = new Subject<Dish[]>();
  constructor(private http: HttpClient) { }
  getdishes(){
    return this.http.get<Dish[]>(
      "http://localhost:3000/api/posts"
    );
   //return DISHES;
    /*this.http
      .get<{ message: string; posts: Dish[] }>(
        "http://localhost:3000/api/posts"
      )
      .subscribe(postData => {
        this.posts = postData.posts;
        this.postsUpdated.next([...this.posts]);
      });
     // return this.posts */
  }
 /* getPostUpdateListener() {
    return this.postsUpdated.asObservable();

  }  */
} 
