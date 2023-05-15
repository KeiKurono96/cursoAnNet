import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { generoCreacionDTO } from '../genero';

@Component({
  selector: 'app-editar-genero',
  templateUrl: './editar-genero.component.html',
  styleUrls: ['./editar-genero.component.css']
})
export class EditarGeneroComponent {

  constructor(private router: Router){}

  modelo:generoCreacionDTO={nombre:'Drama'};

  guardarCambios(genero:generoCreacionDTO){
    // this.router.navigate(['/generos']);
    // alert("Se ha guardado el género (mensaje default)");
    console.log(genero) ;
  }
}
