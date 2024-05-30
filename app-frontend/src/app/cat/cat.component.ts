import { Component, Input } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router'
import { CommonModule } from '@angular/common';
import { Cat } from '../../interfaces/cat';


@Component({
  selector: 'app-cat',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet,
    CommonModule
  ],
  templateUrl: './cat.component.html',
  styleUrl: './cat.component.css'
})
export class CatComponent {

  @Input() cat!: Cat;

}
