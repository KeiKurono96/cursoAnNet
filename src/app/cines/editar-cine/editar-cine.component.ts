import { Component } from '@angular/core';
import { cineCreacionDTO, cineDTO } from '../cine';

@Component({
  selector: 'app-editar-cine',
  templateUrl: './editar-cine.component.html',
  styleUrls: ['./editar-cine.component.css']
})
export class EditarCineComponent {

  modelo: cineDTO={nombre:"Grizzly", latitud:-16.4328951210532, longitud:-71.53464317321779};

  guardarCambios(cine:cineCreacionDTO){
    console.log(cine);
  }

}
