import { Component, OnInit } from '@angular/core';
import { CatsService } from '../../../services/cat.service';
import { Cat } from '../../../interfaces/cat';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule, NgbNav } from '@ng-bootstrap/ng-bootstrap';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-cats',
  imports: [
    FormsModule,
    CommonModule,
    NgbNavModule,
    NgbDropdownModule,
    NgbNav,
    NgbCollapseModule
  ],
  standalone: true,
  templateUrl: './edit-cats.component.html',
  styleUrls: ['./edit-cats.component.css']
})
export class EditCatsComponent implements OnInit {

  constructor(private catsService: CatsService) {}

  ngOnInit(): void {
    this.fetchCats();
  }

  cats: Cat[] = [];
  newCat: Cat = {
    cat_name: '',
    cat_color: '',
    cat_description: '',
    good_cat_status: false,
    cat_age: 0,
    cat_gender: '',
    cat_breed: '',
    cat_picture: ''
  };

  fetchCats(): void {
    this.catsService.getCats().subscribe(data => {
      this.cats = data;
    });
  }

  deleteCat(id: number | undefined): void {
    if (id !== undefined) {
      this.catsService.deleteCat(id).subscribe(() => {
        this.cats = this.cats.filter(cat => cat.id !== id);
      });
    }
  }

  addCat(): void {
    const formData = new FormData();
    Object.keys(this.newCat).forEach(key => {
      const value = (this.newCat as any)[key];
      if (key === 'cat_picture' && value instanceof File) {
        formData.append(key, value);
      } else {
        formData.append(key, value as string | Blob);
      }
    });
    this.catsService.addCat(formData).subscribe(cat => {
      this.cats.push(cat);
      this.resetNewCat();
    });
  }

  onFileChange(event: any): void {
    this.newCat.cat_picture = event.target.files[0];
  }

  resetNewCat(): void {
    this.newCat = {
      cat_name: '',
      cat_color: '',
      cat_description: '',
      good_cat_status: false,
      cat_age: 0,
      cat_gender: '',
      cat_breed: '',
      cat_picture: ''
    };
  }
}