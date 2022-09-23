import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IPhotoDetailsResponse } from '../models/photo-details-response.model';

@Injectable({
  providedIn: 'root'
})
export class PicsumApiService {

  private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  public getRandomPhoto(): Observable<HttpResponse<string>> {
    return this.http.get(`${this.apiUrl}/200/300`, {
      observe: 'response',
      responseType: 'text'
    });
  }

  public getPhotoDetails(id: string): Observable<IPhotoDetailsResponse> {
    return this.http.get<IPhotoDetailsResponse>(`${this.apiUrl}/id/${id}/info`);
  }
}
