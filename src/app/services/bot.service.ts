import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs'; // change to new RxJS 6 import syntax


@Injectable({
  providedIn: 'root'
})
export class BotService {

  urlPrefix = '';
  endpoint = 'bot/';

  constructor(private http: HttpClient) {
    this.urlPrefix = this.endpoint;
  }

  sendMessage(message){
    return forkJoin(
      this.http.post<any>(
        this.urlPrefix,
        {'text': message}
      )
    );
  }




}
