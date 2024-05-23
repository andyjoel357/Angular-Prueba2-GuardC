import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  ocultar= localStorage.getItem('token')

  cerrar(){
    localStorage.removeItem('token')  
    window.location.href='login'
  }
}
