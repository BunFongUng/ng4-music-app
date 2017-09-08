import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { SpotifyServiceService } from '../_services/spotify-service.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  id: string;
  artist: Object;

  constructor(private route: ActivatedRoute, private spotify: SpotifyServiceService, private location: Location) {
    route.params.subscribe((params: any) => {
      this.id = params['id'];
    });
  }

  ngOnInit(): void {
    this.spotify.getArtist(this.id)
        .subscribe((res: any) => {
          this.renderArtist(res);
        });
  }

  back(): void {
    this.location.back();
  }

  renderArtist(res): void {
    this.artist = res;
  }
}
