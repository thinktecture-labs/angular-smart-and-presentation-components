import { Component } from '@angular/core';
import {CdOption} from "./cd-select/cd-select.component";

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
}
