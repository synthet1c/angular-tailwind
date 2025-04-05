import {Component, inject, OnInit, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from '#components/header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
})
export class AppComponent implements OnInit {

  ngOnInit() {
    console.log('AppComponent:ngOnInit');
  }

  title = 'angular-tailwind';
}
