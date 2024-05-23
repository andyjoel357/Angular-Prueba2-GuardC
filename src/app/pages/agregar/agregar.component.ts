import { Component, inject } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './agregar.component.html',
  styleUrl: './agregar.component.css'
})
export class AgregarComponent {
  email: any;
  password: any;
  rol: any;
  token: any;
  servicio = inject(LoginService)
  registro( datos:any){
    this.servicio.postUsers2(datos.value).subscribe(
    r=>{
      this.token = r.accessToken
      if(this.token != ''){
        localStorage.setItem("token", 'true')
        window.location.href=('privado')
      }
    }
  )
        }
}
