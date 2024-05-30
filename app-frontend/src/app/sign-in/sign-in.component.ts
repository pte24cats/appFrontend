import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [
    NgbNavModule,
    HttpClientModule
  ],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {

  constructor(public activeModal: NgbActiveModal, private http: HttpClient, private router: Router) {}

  active = 1;

  login(email: string, password: string) {
    this.http
      .post<any>('http://localhost:8000/api/login', { email, password })
      .subscribe(
        (response) => {
          localStorage.setItem('token', response.token);
          this.router.navigate(['']);
        },
        (error) => {
          console.error('Login error:', error);
        }
      );
  }

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
