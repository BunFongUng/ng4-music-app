import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { SpotifyServiceService } from '../_services/spotify-service.service';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {
  id: string;
  track: Object;

  constructor(private spotify: SpotifyServiceService, private route: ActivatedRoute, private location: Location) {
    route.params.subscribe((params: any) => {
      this.id = params['id'];
    });
  }

  ngOnInit() {
    this.spotify.getTrack(this.id)
        .subscribe((res: any) => this.renderTrack(res));
  }

  back(): void {
    this.location.back();
  }

  renderTrack(res): void {
    this.track = res;
  }
}
