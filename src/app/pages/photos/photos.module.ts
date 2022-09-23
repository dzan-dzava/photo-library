import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotosComponent } from './photos.component';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';

const routes: Routes = [
  {
    path: '',
    component: PhotosComponent
  }
];

@NgModule({
  declarations: [
    PhotosComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatProgressSpinnerModule,
    MatCardModule
  ]
})
export class PhotosModule { }
