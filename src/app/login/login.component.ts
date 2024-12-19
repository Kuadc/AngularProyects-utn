import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ FormsModule, ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  myform: FormGroup;
    constructor(public fb: FormBuilder){
  
      this.myform = this.fb.group({
  
        email : ["",[Validators.required, Validators.email]],
        password : ["",[Validators.required, Validators.minLength(6), Validators.maxLength(10)]],
  
      })
    }
  
  }
  

