import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IUser } from '../models/user';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent {

  @Output()
  onCreate = new EventEmitter<IUser>();
  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {

    this.userForm = this.formBuilder.group({
      login: ['', Validators.required],
      birthdate: [new Date()],
      role: ['Manager', Validators.required],
    });

    // userForm = new FormGroup({
    //   firstName: new FormControl(''),
    //   lastName: new FormControl(''),
    // });
  }

  onSubmit() {
    // user data? 

    if (!this.userForm.valid) {
      alert("Invalid data.");
      return;
    }

    let user = this.userForm.value as IUser;
    console.log(user);
    this.onCreate.emit(user);
  }
}
