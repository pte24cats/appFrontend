import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OurCatsComponent } from './our-cats/our-cats.component';
import { AboutComponent } from './about/about.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { EditCatsComponent } from './admin/edit-cats/edit-cats.component';
import { EditUsersComponent } from './admin/edit-users/edit-users.component';
import { NavComponent } from './admin/nav/nav.component';

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
    },
    {
        path: 'admin',
        component: NavComponent,
        title: 'Master Admin',
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent,
                title: 'Dashboard'
            },
            {
                path: 'users',
                component: EditUsersComponent,
                title: 'Edit Users'
            },
            {
                path: 'edit-cats',
                component: EditCatsComponent,
                title: 'Edit Cats'
            }
        ]
    }
];
