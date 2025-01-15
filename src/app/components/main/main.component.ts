import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  ciudades:string[] = ["Madrid","Roma","Londres","Lisboa"];
  mostrarCiudad:boolean = false;
  cambioCSS:boolean= true;

  mostrar(){
    this.mostrarCiudad = !this.mostrarCiudad;
  }

  mostrarCSS(){
    this.cambioCSS = !this.cambioCSS;
  }
}
