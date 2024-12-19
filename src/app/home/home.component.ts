import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title = 'practico1';
  name = "Carlos Catalan";
  bandera = false;
  inputname= "new name";
  productos =[ "campera", "remera", "camisa"];
  
  changename(newname:string, inputElement: HTMLInputElement)
  {
    if (newname){
      this.name = newname; 
    inputElement.value = "";
    }
    else{
      alert("Enter a new name");
    }
    
  }
}


