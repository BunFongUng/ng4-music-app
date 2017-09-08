import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyServiceService {
  static BASE_URL: string = 'https://api.spotify.com/v1';
  constructor(private http: Http) { }

  query(URL: string, params?: string[]): Observable<any[]> {
    let queryURL = `${SpotifyServiceService.BASE_URL}${URL}`;
    if (params) {
      queryURL = `${queryURL}?${params.join('&')}`;
    }
    return this.http.get(queryURL).map((res: Response) => res.json());
  }

  search(query: string, type: string): Observable<any[]> {
    return this.query('/search', [
      `q=${query}`,
      `type=${type}`
    ]);
  }

  getTrack(id: string): Observable<any[]> {
    return this.query(`/tracks/${id}`);
  }

  getArtist(id: string): Observable<any[]> {
    return this.query(`/artists/${id}`);
  }

  getAlbum(id: string): Observable<any[]> {
    return this.query(`/albums/${id}`);
  }

  searchTrack(query: string): Observable<any[]> {
    return this.search(query, 'track');
  }
}
