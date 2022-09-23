import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FavoritesService } from 'src/app/services/favorites.service';
import { PicsumApiService } from 'src/app/services/picsum-api.service';
import { environment } from 'src/environments/environment';
import { IPhoto } from './models/photo.model';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit, OnDestroy {

  @ViewChild('spinner', { read: ElementRef })
  spinner!: ElementRef;

  public randomPhotos: IPhoto[] = [];
  public photosPerPage: number = 12;
  public initialRequestCount: number = this.photosPerPage;
  public apiUrl: string = environment.apiUrl;
  private observer: IntersectionObserver;
  private options: IntersectionObserverInit = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
  };

  constructor(
    private picsumApiService: PicsumApiService,
    private favoritesService: FavoritesService
  ) {
    this.observer = new IntersectionObserver(entries => {
      
      entries.forEach(entry => {
        if (entry.isIntersecting) this.loadPhotos();
      });
    }, this.options);
  }

  ngOnInit(): void {
    this.loadPhotos();
  }

  ngOnDestroy(): void {
    this.observer.disconnect();
  }

  loadPhotos() {
    for(let i = 1; i <= this.photosPerPage; i++) {
      this.picsumApiService.getRandomPhoto()
        .subscribe(res => {
          const photoId: string = String(res.headers.get('Picsum-ID'));

          if (this.initialRequestCount !== 0) this.initialRequestCount--;
          if (this.initialRequestCount === 0) this.observer.observe(this.spinner.nativeElement);            

          this.randomPhotos.push({
            id: photoId,
            selected: this.favoritesService.currentValue.includes(photoId)
              ? true
              : false
          })
        });
    }
  }

  public onClick(photo: IPhoto): void {
    if (photo.selected) return;
    
    photo.selected = true;
    this.favoritesService.addPhoto(photo.id);
  }
}
