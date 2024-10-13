import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserCardComponent } from "./user-card/user-card.component";
import { IUser, USERS } from './models/user';
import { UserFormComponent } from "./user-form/user-form.component";
import { HttpClient } from '@angular/common/http';
import { UsersService } from './services/users.service';

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

  users: IUser[] = [];// = USERS;

  constructor(private usersService: UsersService) {
    usersService.getAll().subscribe(data => this.users = data.users);
  }

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

