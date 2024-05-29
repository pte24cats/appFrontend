import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://127.0.0.1:8000';
  constructor(private http: HttpClient) {}

  login(credentials: any) {
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }
  register(user: any) {
    return this.http.post(`${this.apiUrl}/register`, user);
  }
  logout() {
    localStorage.removeItem('token');
    return this.http.post(`${this.apiUrl}/logout`, {}).subscribe(
      () => {
        window.location.href = '/login';
      },
      (error: any) => {
        console.error('Logout error:', error);
      }
    );
  }
}
