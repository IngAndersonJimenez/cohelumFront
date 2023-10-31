import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {RequestLogin} from "../interface/RequestLogin";
import {BehaviorSubject, catchError, map, Observable, throwError} from "rxjs";
import {Router} from "@angular/router";
import {Inventory} from "../interface/inventory";



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl = "http://localhost:8095/api/v1/inventory"




    constructor(private http: HttpClient,private router:Router) { }

  postToken() {
    return this.http.post(
      'https://nodejs.org/api/url.html#the-whatwg-url-api',
      {},
    );
  }

    loginUser(requestLogin: Array<RequestLogin>){
        return this.http.post<RequestLogin>(this.baseUrl + 'login',requestLogin).pipe(
            catchError(err => {
                if (err.status == 500){
                    console.error(err.error.mensaje)
                } else if (err.status == 400){
                    console.error(err.error.mensaje)
                }

                return throwError(err);
            })
        )
    }
  getInventory(id: number) {

    // Define los encabezados personalizados que deseas incluir
    const headers = new HttpHeaders({
      'Authorization': 'eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJjb3JyZW9wcnVlYmFAZ21haWwuY29tIiwiZXhwIjoxNjk4NzkyODg0LCJuYW1lIjoiY29ycmVvcHJ1ZWJhQGdtYWlsLmNvbSJ9.Ez4vUPgKplD-dAciFlpMzAfverZCMhU5I8LRC-Fn7_Oj_uHs4dRUq3DOkjq57_hro',
      // Puedes agregar más encabezados aquí si es necesario
    });
    return this.http.get<Inventory>(`${this.baseUrl}/${id}`, { headers }).pipe(
      catchError(err => {
        if (err.status === 404) {
          const mensaje = err.error.mensaje;
          this.router.navigate(['/clientes']);
          console.error(mensaje);
          //Swal.fire('Error al editar', mensaje, 'error');
        }
        return throwError(err);
      })
    );
  }

  getInventoryById(idInventory: number): Observable<Inventory> {
    const headers = new HttpHeaders({
      'Authorization': 'eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJjb3JyZW9wcnVlYmFAZ21haWwuY29tIiwiZXhwIjoxNjk4Nzk0NDMwLCJuYW1lIjoiY29ycmVvcHJ1ZWJhQGdtYWlsLmNvbSJ9.lDabkAKfn1Iq1XZawqsu0HFZJftUAKE9ssu9GKz_PUpOi-e1BqHxCE1gsmDQdxDC',
    });
    const url = `${this.baseUrl}/${idInventory}`;
    const options = { headers: headers }; // Opciones de solicitud con encabezados

    return this.http.get<Inventory>(url, options);
  }

}


