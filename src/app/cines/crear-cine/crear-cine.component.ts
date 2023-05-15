import { Component } from '@angular/core';
import { cineCreacionDTO } from '../cine';

@Component({
  selector: 'app-crear-cine',
  templateUrl: './crear-cine.component.html',
  styleUrls: ['./crear-cine.component.css']
})
export class CrearCineComponent {

  guardarCambios(cine:cineCreacionDTO){
    console.log(cine);
  }

}
 