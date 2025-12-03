import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-container',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './container.html',
  styleUrl: './container.scss',
})
export class Container {

}
