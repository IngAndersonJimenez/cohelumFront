import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Aliados } from '../interfaces/home/aliados_response';
import { HomeSlideElement } from '../interfaces/home/homeSlide_response';


@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }
  GET_home_slide(): Observable<HomeSlideElement> { 
    return this.http.get<HomeSlideElement>('./../../assets/data/home/home.json');
  }
  GET_home_aliados(): Observable<Aliados> { 
    return this.http.get<Aliados>('./../../assets/data/home/aliados.json');
  }

}
