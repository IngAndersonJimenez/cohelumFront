import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseHomeSlide } from '../interfaces/home/homeSlide_response';
import { Aliados } from '../interfaces/home/aliados_response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }
  GET_home_slide(): Observable<ResponseHomeSlide> {
    return this.http.get<ResponseHomeSlide>('./../../assets/data/home/home.json');
  }
  GET_home_aliados(): Observable<Aliados> {
    return this.http.get<Aliados>('./../../assets/data/home/aliados.json');
  }
}
