import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserModel } from '../../model/user.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ ReactiveFormsModule,CommonModule,FormsModule],
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private router:Router){

  }
//Reactive Forms
userForm= new FormGroup({
  username:new FormControl('',Validators.required),
  password:new FormControl('',Validators.required),
});
onSubmit(){
  let value =  this.userForm.value
  let user:UserModel = new UserModel(value)
  //servizio
  console.log("user",user);
  this.router.navigate(["/home"]);

}
}
