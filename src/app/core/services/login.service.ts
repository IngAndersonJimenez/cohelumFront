import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  postToken() {
    return this.http.post(
      'https://nodejs.org/api/url.html#the-whatwg-url-api',
      {},
    );
  }

}
