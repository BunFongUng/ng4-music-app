import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { SpotifyServiceService } from '../_services/spotify-service.service';
@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  id: string;
  album: Object;

  constructor(private route: ActivatedRoute, private spotify: SpotifyServiceService, private location: Location) {
    route.params.subscribe((params: any) => {
      this.id = params['id'];
    });
  }

  ngOnInit(): void {
    this.spotify.getAlbum(this.id)
        .subscribe((res: any) => {
          this.renderAlbum(res);
        });
  }

  back(): void {
    this.location.back();
  }

  renderAlbum(res): void {
    this.album = res;
  }
}
