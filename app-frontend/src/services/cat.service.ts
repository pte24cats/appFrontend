import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cat } from '../interfaces/cat';


@Injectable({
  providedIn: 'root'
})
export class CatsService {
  private apiUrl = 'http://127.0.0.1:8000/api/cats';

  constructor(private http: HttpClient) { }

  getCats(): Observable<Cat[]> {
    return this.http.get<Cat[]>(this.apiUrl);
  }

  addCat(cat: FormData): Observable<Cat> {
    return this.http.post<Cat>(this.apiUrl, cat);
  }

  deleteCat(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}