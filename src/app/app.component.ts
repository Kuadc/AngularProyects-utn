import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'practico1';
  name = "Carlos Catalan";
  inputname= "new name";
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
