import { Component } from '@angular/core';
import { IUser } from '../models/user';
import { UsersService } from '../services/users.service';
import { UserCardComponent } from '../user-card/user-card.component';
import { UserFormComponent } from '../user-form/user-form.component';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [UserCardComponent, UserFormComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
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
}
