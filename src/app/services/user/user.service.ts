import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from 'src/app/interfaces/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private API_HOST = 'https://reqres.in/api/';
  constructor(private httpClient: HttpClient) {}

  register(user: User): Observable<User> {
    const url = this.API_HOST + 'user';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
    });
    return this.httpClient.post<User>(url, JSON.stringify(user), {
      headers: headers,
    });
  }

  login(user: User): Observable<{ token: string }> {
    const url = this.API_HOST + 'login';
    return this.httpClient.post<{ token: string }>(url, user);
  }

  logout(): Observable<any> {
    const url = this.API_HOST + 'logout';
    return this.httpClient.post(url, {});
  }
}
