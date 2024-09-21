import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserCardComponent } from "./user-card/user-card.component";
import { IUser } from './models/user';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular NPD221';
  year: number = 2024;

  users: IUser[] = [
    {
      id: 1000,
      login: "super_bob",
      birthdate: new Date(2004, 0, 10),
      role: "Admin"
    },
    {
      id: 1003,
      login: "vladtymo",
      birthdate: new Date(1998, 3, 10),
      role: "Manager"
    }
  ]

  change() {
    this.title += '!';
    this.year++;
  }
}

