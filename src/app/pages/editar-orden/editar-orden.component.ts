import { Component, inject } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar-orden',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './editar-orden.component.html',
  styleUrl: './editar-orden.component.css'
})
export class EditarOrdenComponent {
  id: any
  mesa:any
  producto:any
  total:any

  servicio = inject(LoginService)
  ruta= inject(Router)
  router=inject(ActivatedRoute)

  ngOnInit(){
   this.router.params.subscribe(r=>{
    this.servicio.getOrdenID(r['idEditar']).subscribe(
      p=>{
        this.id=p.id,
        this.mesa=p.mesa,
        this.producto=p.producto,
        this.total=p.total
      }
    )
   })
  }
  editar(datos: any){
this.servicio.putOrden(datos.value).subscribe()
this.ruta.navigateByUrl("orden")
  }
}
