import { Component } from '@angular/core';
import { CdOption } from "./cd-select/cd-select.component";
import { DvdOption } from './dvd-select/dvd-select.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'smart-presentational-angular';


  cdOptions: CdOption[] = [
    {id: '0', artist: 'Artist 0', song: 'Song 0', cover: 'assets/cover1.jpg'},
    {id: '1', artist: 'Artist 1', song: 'Song 1', cover: 'assets/cover2.jpg'},
    {id: '2', artist: 'Artist 2', song: 'Song 2', cover: 'assets/cover3.jpg'}
  ]

  dvdOptions: DvdOption[] = [
    {id: '0', director: 'Director 0', title: 'The Big Labowsky', oskars: 5, year: 2002, poster: 'assets/poster1.jpg'},
    {id: '1', director: 'Director 1', title: 'Teletabbies', oskars: 10, year: 2031, poster: 'assets/poster2.jpg'},
  ]
}
