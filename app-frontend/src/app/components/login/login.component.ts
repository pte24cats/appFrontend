import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [commonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  credentials = {
    email: '',
    password: '',
  };
  errorMessage: string | null = null;

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.credentials).subscribe(
      (response: any) => {
        // Assuming the token is returned in the response
        localStorage.setItem('token', response.token);
        this.router.navigate(['/']);
      },
      (error: any) => {
        this.errorMessage = 'Login failed! Try again.';
        console.error('Login error:', error);
      }
    );
  }
}
