import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Les Directives';
  isAdmin: boolean = false;

  setAdmin(){
    if (this.isAdmin){
      this.isAdmin=false;
    } else{
      this.isAdmin=true;
    }
  }
}


