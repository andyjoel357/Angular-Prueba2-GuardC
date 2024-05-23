import { Component, inject } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { RouterLink } from '@angular/router';
import { AgregarComponent } from '../agregar/agregar.component';

@Component({
  selector: 'app-orden',
  standalone: true,
  imports: [RouterLink, AgregarComponent],
  templateUrl: './orden.component.html',
  styleUrl: './orden.component.css'
})
export class OrdenComponent {
  servicio=inject(LoginService)
ordenes: any;
  ngOnInit(){
    this.servicio.getOrden().subscribe(p=>{
      this.ordenes = p
    })
  }
  eliminar(id:any){
    var resultado = window.confirm('Estas seguro?');
    if (resultado === true) {
      this.servicio.deleteOrdenID(id).subscribe()
      window.location.reload()
    } else { 
      window.alert('Ningun dato se eliminara');
    }
    }
}
