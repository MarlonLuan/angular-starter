import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.ng.html',
  styleUrl: './app.scss'
})
export class App {
  title = 'my-app';
}
