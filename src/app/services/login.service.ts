import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  API_LOGIN = 'http://localhost:3000/login'
  API_ORDEN = 'http://localhost:3000/ordenes'
  API_USER2='http://localhost:3000/users'
  postUsers2(usuario:any):Observable<any>{
    return this.http.post(this.API_USER2, usuario)
  }
  getUser(): Observable<any> {
    return this.http.get(this.API_USER2)
  }
  deleteUserID(id:string):Observable<any>{
    return this.http.delete( `${this.API_USER2}/${id}`)
  }

  postUsers(usuario: any): Observable<any> {
    return this.http.post(this.API_LOGIN, usuario)
  }

  postOrden(persona: JSON):Observable<any>{
    return this.http.post(this.API_ORDEN, persona)
  }
  getOrden(): Observable<any> {
    return this.http.get(this.API_ORDEN)
  }
  getOrdenID(id: any): Observable<any> {
    return this.http.get(`${this.API_ORDEN}/${id}`)
  }
  putOrden(ordenes:any):Observable<any>{
    return this.http.put(`${this.API_ORDEN}/${ordenes.id}`, ordenes)
  }
  deleteOrdenID(id: any): Observable<any> {
    return this.http.delete(`${this.API_ORDEN}/${id}`)
  }
}
