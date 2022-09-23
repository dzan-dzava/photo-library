import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritesComponent } from './favorites.component';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';

const routes: Routes = [
  {
    path: '',
    component: FavoritesComponent
  }
];

@NgModule({
  declarations: [
    FavoritesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule
  ]
})
export class FavoritesModule { }
