import { Component, inject } from '@angular/core';
import { AgregarComponent } from '../agregar/agregar.component';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [AgregarComponent],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent {
  servicio=inject(LoginService)
  users: any

  ngOnInit(){
    this.servicio.getUser().subscribe(p=>{
      this.users = p
    })
  }

  eliminar(id: any){
    this.servicio.deleteUserID(id).subscribe()
    window.location.reload()
      window.confirm('Estas seguro?');
    }
}
