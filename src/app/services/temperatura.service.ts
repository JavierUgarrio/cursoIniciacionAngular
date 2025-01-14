import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const urlBase='https://api.openweathermap.org/data/2.5/weather';
const apiKey= '22864e681762d698fe6797eefc075aa8';

@Injectable({
  providedIn: 'root'
})
export class TemperaturaService {

  constructor(private http: HttpClient) { }

  getEstadoTiempo(ciudad:string){
    const url =`${urlBase}?q=${ciudad}&appid=${apiKey}`;
    return this.http.get(url);
  }
}
