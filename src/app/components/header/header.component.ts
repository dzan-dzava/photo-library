import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { FavoritesService } from 'src/app/services/favorites.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public favoritePhotosCount$: Observable<number> = this.favoritesService.favoritePhotosCount;

  constructor(private favoritesService: FavoritesService) { }

}
