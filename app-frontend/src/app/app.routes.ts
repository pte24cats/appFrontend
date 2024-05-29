import { Routes } from '@angular/router';
import { OurCatsComponent } from './our-cats/our-cats.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [

    {
        path: '',
        component: HomeComponent,
        title: '[Site Title]'
    },
    {
        path: 'our-cats',
        component: OurCatsComponent,
        title: 'Our Cats'
    }

];
