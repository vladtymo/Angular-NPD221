import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  title = 'Angular NPD221';
  year: number = 2024;

  constructor() {
  }

  change() {
    this.title += '!';
    this.year++;
  }
}
