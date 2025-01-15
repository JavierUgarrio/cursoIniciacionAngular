import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  ciudades:string[] = ["Madrid","Roma","Londres","Lisboa"];
  mostrarCiudad:boolean = false;

  mostrar(){
    this.mostrarCiudad = !this.mostrarCiudad;
  }

}
