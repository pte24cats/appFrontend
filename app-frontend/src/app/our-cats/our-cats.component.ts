import { Component } from '@angular/core';
import { NavigationComponent } from '../navigation/navigation.component';
import { CommonModule } from '@angular/common';
import { CatComponent } from '../cat/cat.component';
import { RouterLink } from '@angular/router';
import { Cat } from '../../interfaces/cat';
import { CatsService } from '../../services/cat.service';

@Component({
  selector: 'app-search-cats',
  standalone: true,
  imports: [
    NavigationComponent,
    CommonModule,
    CatComponent,
    RouterLink
  ],
  templateUrl: './our-cats.component.html',
  styleUrl: './our-cats.component.css'
})
export class OurCatsComponent {

  cat: Cat[] = [];

  constructor(private catService: CatsService) { }

  ngOnInit(): void {
    this.catService.getCats().subscribe((data: Cat[]) => {
      this.cat = data;
    });
  }

}
