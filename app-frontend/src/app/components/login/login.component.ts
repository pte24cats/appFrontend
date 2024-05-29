import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private http: HttpClient, private router: Router) {}

  login(email: string, password: string) {
    this.http
      .post<any>('http://localhost:8000/api/login', { email, password })
      .subscribe(
        (response) => {
          localStorage.setItem('token', response.token);
          this.router.navigate(['/dashboard']);
        },
        (error) => {
          console.error('Login error:', error);
        }
      );
  }
}
