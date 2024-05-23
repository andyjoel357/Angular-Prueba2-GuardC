import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  servicio = inject(LoginService)
  route = inject(Router)
  password: any;
  email: any;
  token: any;
  login(formulario: any) {
    this.servicio.postUsers(formulario.value).subscribe(p => {
      this.token = p.accessToken
      console.log(p)
      if (this.token != 'true' && p.user.rol =='mesero') {
        localStorage.setItem("token", 'true')
        window.location.href=('orden')
      }   else if (this.token != 'true' && p.user.rol == 'administrador'){
        localStorage.setItem("admin", 'true')
        window.location.href=('usuarios')
      }
    })
  }
 }
