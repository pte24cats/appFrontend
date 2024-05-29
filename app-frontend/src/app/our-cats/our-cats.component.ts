import { Component } from '@angular/core';
import { NavigationComponent } from '../navigation/navigation.component';
import { CommonModule } from '@angular/common';
import { CatComponent } from '../cat/cat.component';
import { CatService } from '../../services/cat.service';
import { Cat } from '../../interfaces/cat';

@Component({
  selector: 'app-search-cats',
  standalone: true,
  imports: [
    NavigationComponent,
    CommonModule,
    CatComponent
  ],
  templateUrl: './our-cats.component.html',
  styleUrl: './our-cats.component.css'
})
export class OurCatsComponent {

}
