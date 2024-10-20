import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { UserCardComponent } from "./user-card/user-card.component";
import { IUser, USERS } from './models/user';
import { UserFormComponent } from "./user-form/user-form.component";
import { HttpClient } from '@angular/common/http';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}

