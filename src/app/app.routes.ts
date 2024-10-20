import { Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    { path: 'users', component: UserListComponent },
    { path: 'about', component: AboutComponent },
];
