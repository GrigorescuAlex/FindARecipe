import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'search/:recipe-search',
    component: HomeComponent,
  },
  {
    path: 'favorites',
    component: FavoritesComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/home',
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
