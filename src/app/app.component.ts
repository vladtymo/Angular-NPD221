import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserCardComponent } from "./user-card/user-card.component";
import { IUser, USERS } from './models/user';
import { UserFormComponent } from "./user-form/user-form.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserCardComponent, UserFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular NPD221';
  year: number = 2024;

  users: IUser[] = USERS;

  removeItem(id: number) {
    let index = this.users.findIndex(x => x.id === id);
    if (index !== -1)
      this.users.splice(index, 1);
  }

  create(user: IUser) {
    this.users.push(user);
  }

  clear() {
    this.users = [];
  }

  change() {
    this.title += '!';
    this.year++;
  }
}

