import { Routes } from '@angular/router';
import { AboutPageComponent } from './about/about-page.component';
import { UsersPageComponent } from './users/users-page/users-page.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'users' },
  { path: 'users', component: UsersPageComponent },
  // TODO: dodaj trasę /about prowadzącą do AboutPageComponent.
  { path: '**', redirectTo: 'users' },
];
