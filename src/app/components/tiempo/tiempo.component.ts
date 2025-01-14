import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UtilService } from 'src/app/services/validation/util.service';

@Component({
  selector: 'app-tiempo',
  templateUrl: './tiempo.component.html',
  styleUrls: ['./tiempo.component.css']
})
export class TiempoComponent {

  formulario !: FormGroup;

  constructor(private formBuilder : FormBuilder, private _util: UtilService) { 
    this.iniciarFormulario();
  }

  ngOnInit(): void {
    
  }

  /*
   el metodo crea e inicia un formulario
  */
  iniciarFormulario(){
    this.formulario = this.formBuilder.group({
      ciudad: ['', [Validators.required , this._util.noBarcelona ,Validators.pattern('^[a-zA-Z ]*$')]],
      codigoCiudad: ['', [Validators.required , Validators.pattern('^[0-9]*$')]]
    });
  }

  consultar(){
    console.log("formulario:" , this.formulario);
    // Aquí se debería hacer la llamada a la API de tiempo
    // y mostrar los resultados en pantalla.
    // Este ejemplo solo imprime los valores del formulario en consola.
  }
}
