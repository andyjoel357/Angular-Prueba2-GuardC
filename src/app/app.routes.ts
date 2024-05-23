import { Routes } from '@angular/router';
import { OrdenComponent } from './pages/orden/orden.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { Error404Component } from './pages/error-404/error-404.component';
import { LoginComponent } from './pages/login/login.component';
import { adminGuard, loginGuard } from './guards/pages.guard';
import { EditarOrdenComponent } from './pages/editar-orden/editar-orden.component';

export const routes: Routes = [
    {path: 'orden', component:OrdenComponent, canActivate:[loginGuard]},
    {path: 'usuarios', component:UsuariosComponent, canMatch:[adminGuard]},
    {path: 'login', component:LoginComponent},
    {path: 'editar/:idEditar', component:EditarOrdenComponent, canActivate:[loginGuard]},
    {path:"", redirectTo:"login", pathMatch:"full"},
    {path:"**", component:Error404Component}

];
