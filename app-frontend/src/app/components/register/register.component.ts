import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(private http: HttpClient, private router: Router) {}

  register(
    name: string,
    email: string,
    password: string,
    password_confirmation: string
  ) {
    this.http
      .post<any>('http://localhost:8000/api/register', {
        name,
        email,
        password,
        password_confirmation,
      })
      .subscribe(
        (response) => {
          localStorage.setItem('token', response.token);
          this.router.navigate(['/dashboard']);
        },
        (error) => {
          console.error('Registration error:', error);
        }
      );
  }
}
