import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyServiceService {

  constructor(private http: Http) { }

  searchTrack(query: string): Observable<any> {
    let params: string = [
      `q=${query}`,
      `type=track`
    ].join('&');

    let queryUrl: string = `https://api.spotify.com/v1/search?${params}`;
    return this.http.get(queryUrl).map((res: Response) => res.json());
  }
}
