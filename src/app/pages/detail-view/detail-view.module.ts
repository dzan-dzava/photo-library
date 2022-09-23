import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailViewComponent } from './detail-view.component';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

const routes: Routes = [
  {
    path: '',
    component: DetailViewComponent
  }
];

@NgModule({
  declarations: [
    DetailViewComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule,
    MatButtonModule
  ]
})
export class DetailViewModule { }
