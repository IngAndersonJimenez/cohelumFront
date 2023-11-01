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

    loginUser(requestLogin: RequestLogin):Observable<any>{
      console.log("Peticion");
      console.log(requestLogin);
        return this.http.post<any>('http://localhost:8095/' + 'login',requestLogin).pipe(
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
      'Authorization': 'Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJwcnVlYmFAZ21haWwuY29tIiwiZXhwIjoxNjk4Nzk1Mzk3LCJuYW1lIjoicHJ1ZWJhQGdtYWlsLmNvbSJ9.3-oXMcBQHlLfjT0qYU14ubbGAYebwJY6vYXxZ4KY9h2X1hPz0IXNMu3B11UeeuBq',
      // Puedes agregar más encabezados aquí si es necesario
    });

    return this.http.get<Inventory>(`${this.baseUrl}/${id}`).pipe(

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
      'Authorization': 'Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJwcnVlYmFAZ21haWwuY29tIiwiZXhwIjoxNjk4Nzk1ODIxLCJuYW1lIjoicHJ1ZWJhQGdtYWlsLmNvbSJ9.1ipsaidti18-WxejydzW3HKLKnvvQR3uQMyWnQ4tPvKtltHeCzGKwB4FmiKQVYyg',
    });
    const url = `${this.baseUrl}/${idInventory}`;
    //const options = { headers: headers }; // Opciones de solicitud con encabezados

    return this.http.get<Inventory>(url);;
  }

}


