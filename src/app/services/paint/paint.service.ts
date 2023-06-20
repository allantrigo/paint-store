import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PaintService {
  private API_HOST = 'https://reqres.in/api/paint';
  constructor(private httpClient: HttpClient) {}

  fetch(page?: number): Observable<JSON> {
    let url = this.API_HOST;
    if (page) url += `?page=${page}`;
    return this.httpClient.get<JSON>(url);
  }

  findByID(id: number): Observable<JSON> {
    return this.httpClient.get<JSON>(this.API_HOST + `/${id}`);
  }
}
