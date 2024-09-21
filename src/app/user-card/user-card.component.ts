import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IUser } from '../models/user';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {

  @Input()
  user: IUser = {
    id: 0,
    login: "example",
    birthdate: new Date(),
    role: "none"
  };
}
