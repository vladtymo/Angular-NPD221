import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  user?: IUser;

  @Output()
  onDelete = new EventEmitter<number>();

  changeRole() {
    if (this.user)
      this.user.role = this.user?.role === "Admin" ? "Manager" : "Admin";
  }

  remove() {  
    // remove user? - No
    this.onDelete.emit(this.user?.id);
  }
}
