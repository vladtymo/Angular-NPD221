import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser, UserResponse } from '../models/user';
import { HttpClient } from '@angular/common/http';

const api1 = "https://jsonplaceholder.typicode.com/users";
const api2 = "https://dummyjson.com/users";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<UserResponse> {
    return  this.http.get<UserResponse>(api2);
  }
}
