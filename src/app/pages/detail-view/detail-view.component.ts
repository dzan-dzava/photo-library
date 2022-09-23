import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { IPhotoDetailsResponse } from 'src/app/models/photo-details-response.model';
import { FavoritesService } from 'src/app/services/favorites.service';
import { PicsumApiService } from 'src/app/services/picsum-api.service';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.scss']
})
export class DetailViewComponent implements OnInit, OnDestroy {

  private destroy$: Subject<void> = new Subject<void>();
  public photoDetails: IPhotoDetailsResponse | null = null;

  constructor(
    private route: ActivatedRoute,
    private picsumApiService: PicsumApiService,
    private favoritesService: FavoritesService
  ) { }

  ngOnInit(): void {
    this.route.paramMap
      .pipe(takeUntil(this.destroy$))
      .subscribe(params => {
        const photoId: string | null = params.get('id');

        if (photoId) {
          this.picsumApiService.getPhotoDetails(photoId)
            .subscribe(res => this.photoDetails = res);
        }
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public removePhoto(photoId: string): void {
    this.favoritesService.removePhoto(photoId);
  }
}
