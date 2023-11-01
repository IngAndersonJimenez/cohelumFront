import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {RequestLogin} from "../interface/RequestLogin";
import {BehaviorSubject, catchError, map, Observable, throwError} from "rxjs";
import {Router} from "@angular/router";
import {environment} from "../../environments/environment";
import {NotificationService} from "../../notifications/notification.service";


@Injectable({
  providedIn: 'root'
})
export class LoginService {


    constructor(private http: HttpClient,private router:Router, private notificationService:NotificationService) { }

  postToken() {
    return this.http.post(
      'https://nodejs.org/api/url.html#the-whatwg-url-api',
      {},
    );
  }

    login(requestLogin: RequestLogin): Observable<any>{
      console.log(requestLogin)

      return this.http.post<any>(environment.apiUrl + 'login', requestLogin).pipe(
        map(result =>{
          console.log(result)
          if (result != null ){
            console.log("Llego")
            this.notificationService.showSuccess("Login exitoso","Bienvenido")
            this.router.navigate(['/home'])
          } else  {
            this.notificationService.showError("Login fallido","Bienvenido")
          }
        })
      )

    }

}


