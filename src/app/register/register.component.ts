import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [FormsModule, ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  myform: FormGroup;

  
  constructor(public fb: FormBuilder){

    this.myform = this.fb.group({

      name : ["",[Validators.required]],
      lastname : ["",[Validators.required]],
      email : ["",[Validators.required, Validators.email]],
      number : ["",],
      password : ["",[Validators.required, Validators.minLength(6), Validators.maxLength(10)]],

    })
  }


  submitform(modal: HTMLElement){
    if(this.myform.valid)
    {
      modal.style.display = "block";
    }
    
  }

  closemodal(modal: HTMLElement){
    modal.style.display = "none";
  }


}
