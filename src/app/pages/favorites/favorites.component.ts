import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { FavoritesService } from 'src/app/services/favorites.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent {

  public photos$: Observable<string[]> = this.favoritesService.favoritePhotos$;
  public apiUrl: string = environment.apiUrl;

  constructor(private favoritesService: FavoritesService) { }

}
