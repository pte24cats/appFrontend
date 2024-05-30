import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OurCatsComponent } from './our-cats/our-cats.component';
import { AboutComponent } from './about/about.component';
import { SignInComponent } from './sign-in/sign-in.component';

export const routes: Routes = [

    {
        path: '',
        component: HomeComponent,
        title: 'pte24cats'
    },
    {
        path: 'our-cats',
        component: OurCatsComponent,
        title: 'Our Cats'
    },
    {
        path: 'about',
        component: AboutComponent,
        title: 'About Us'
    },
    {
        path: 'sign-in',
        component: SignInComponent,
        title: 'Sign In'
    }

];
