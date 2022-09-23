import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private _favoritePhotos$: BehaviorSubject<string[]>;

  public get favoritePhotos$(): Observable<string[]> {
    return this._favoritePhotos$.asObservable();
  }

  public get favoritePhotosCount(): Observable<number> {
    return this._favoritePhotos$.pipe(map(x => x.length));
  }

  public get currentValue() {
    return this._favoritePhotos$.getValue();
  }

  constructor(private router: Router) {
    const savedPhotos: string | null = localStorage.getItem('favoritePhotos');

    if (savedPhotos) {
      this._favoritePhotos$ = new BehaviorSubject<string[]>(JSON.parse(savedPhotos));
    } else {
      this._favoritePhotos$ = new BehaviorSubject<string[]>([]);
    }
  }

  public addPhoto(id: string): void {
    const favoritePhotos = this.currentValue;
    if (!favoritePhotos.includes(id)) {
      favoritePhotos.push(id);
      this._favoritePhotos$.next(favoritePhotos);
      localStorage.setItem('favoritePhotos', JSON.stringify(this.currentValue));
    }
  }

  public removePhoto(id: string): void {
    const favoritePhotos = this.currentValue;
    favoritePhotos.splice(favoritePhotos.indexOf(id), 1);
    this._favoritePhotos$.next(favoritePhotos);
    localStorage.setItem('favoritePhotos', JSON.stringify(this.currentValue));
    this.router.navigate(['/favorites']);
  }
}
