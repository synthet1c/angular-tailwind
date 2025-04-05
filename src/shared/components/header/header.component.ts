import { ChangeDetectionStrategy, Component } from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [
    CommonModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  host: {
    class: 'flex-1'
  }
})
export class HeaderComponent {
  styles = {
    container : 'mx-auto flex self-center items-center gap-x-4 p-6 bg-slate-800 -outline-offset-1 outline-white/10',
    image: 'size-12 shrink-0',
    heading : 'text-xl font-medium text-white',
    text : 'text-gray-500 dark:text-gray-400',
  }
}
