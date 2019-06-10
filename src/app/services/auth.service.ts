import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { forkJoin } from 'rxjs'; // change to new RxJS 6 import syntax
import { environment } from '../../environments/environment';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: localStorage.getItem('token')
  })
};
@Injectable()
export class AuthService {
    
    urlPrefix = '';
    endpoint = '/post/';

  constructor(private http: HttpClient) {
    this.urlPrefix = environment.baseUrl + this.endpoint;
  }

  
  getUsers() {
    return forkJoin(this.http.get<any>(environment.baseUrl + '/users'));
  }

  login(credentials) {
    return this.http.post<any>(
      environment.baseUrl + '/users/login',
      credentials
    );
  }

  register(user) {
    return this.http.post<any>(environment.baseUrl + '/users', user);
  }

  getAuthUrl() {
    return this.http.get<any>(environment.baseUrl + '/auth');
  }

  authenticate(auth) {
    console.log(auth);
    return this.http.post<any>(environment.baseUrl + '/auth', auth);
  }

  isAuthenticated() {
      return true;
    if (localStorage.getItem('token')) {
      return true;
    }
    return false;
  }

  isAdmin() {
    return true;//localStorage.getItem('role') === 'admin';
  }

  getUserEmail() {
    return 'yousef@yousef.com';//localStorage.getItem('username');
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  getUser() {
      return {'username': 'Yousef', 'role': 'admin'}
    //return JSON.parse(localStorage.getItem('user'));
  }
}
