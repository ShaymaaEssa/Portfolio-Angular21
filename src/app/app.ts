import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Container } from './layout/container/container';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Container],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Portfolio');

}
