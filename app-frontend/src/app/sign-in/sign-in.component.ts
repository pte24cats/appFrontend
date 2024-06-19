import { Component } from '@angular/core';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [
    NgbModule,
    NgbNavModule,
  ],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css',
  providers: [NgbActiveModal]
})
export class SignInComponent {

  constructor(public activeModal: NgbActiveModal, private http: HttpClient, private router: Router) {}

  active = 1;

  login(email: string, password: string) {
    this.http
      .post<any>('http://localhost:8000/api/login', { email, password })
      .subscribe(
        (response: any) => {
          localStorage.setItem('token', response.token);
          this.router.navigate(['']);
        },
        (error: any) => {
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
        (response: any) => {
          localStorage.setItem('token', response.token);
          this.router.navigate(['/dashboard']);
        },
        (error: any) => {
          console.error('Registration error:', error);
        }
      );
  }

}
