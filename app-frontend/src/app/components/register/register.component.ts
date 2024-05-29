import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  user = {
    email: '',
    password: '',
  };
  errorMessage: string | null = null;

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    this.authService.register(this.user).subscribe(
      (response: any) => {
        // Assuming the token or confirmation is returned in the response
        this.router.navigate(['/login']);
      },
      (error: any) => {
        this.errorMessage = 'Registration failed! Try again.';
        console.error('Registration error:', error);
      }
    );
  }
}
