import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient, private router: Router) {}

  login(credentials: any) {
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }

  register(user: any) {
    return this.http.post(`${this.apiUrl}/register`, user);
  }

  logout() {
    localStorage.removeItem('token');
    this.http.post(`${this.apiUrl}/logout`, {}).subscribe(
      () => {
        this.router.navigate(['/login']); // Redirect to login page
      },
      (error: any) => {
        console.error('Logout error:', error);
      }
    );
  }
}
