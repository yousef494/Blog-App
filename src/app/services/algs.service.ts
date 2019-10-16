import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs'; // change to new RxJS 6 import syntax
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AlgsService {

  urlPrefix = '';
  endpoint = '/algorithm/';

  constructor(private http: HttpClient) {
    this.urlPrefix = environment.baseUrl + this.endpoint;
  }

  getCount(){
    return forkJoin(this.http.get<any[]>(this.urlPrefix+'count'));
  }

  getArticles(){
    return forkJoin(this.http.get<any[]>(this.urlPrefix+'?sort=-createdAt'));
  }

  getArticle(id){
    return forkJoin(this.http.get<any[]>(this.urlPrefix+id));
  }

  queryArticles(query){
    let queryJson = { "title": { "$regex": "" + query + "", "$options" :'i' } };
    return forkJoin(this.http.get<any[]>(this.urlPrefix+'?query='+JSON.stringify(queryJson)));
  }

  createArticle(article){
    return forkJoin(
      this.http.post<any>(
        this.urlPrefix,
        article
      )
    );
  }

  updatetArticle(id, article){
    return forkJoin(
      this.http.patch<any>(
        this.urlPrefix+id,
        article
      )
    );
  }

  deleteArticel(id){
    return forkJoin(
      this.http.delete<any>(
        this.urlPrefix+id
      )
    );
  }


}

