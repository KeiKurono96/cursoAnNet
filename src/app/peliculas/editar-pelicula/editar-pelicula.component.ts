import { Component } from '@angular/core';
import { PeliculaCreacionDTO } from '../pelicula';

@Component({
  selector: 'app-editar-pelicula',
  templateUrl: './editar-pelicula.component.html',
  styleUrls: ['./editar-pelicula.component.css']
})
export class EditarPeliculaComponent {

  modelo:PeliculaCreacionDTO = {titulo: 'Spider-Man', trailer: 'abc', enCines: true,
    resumen: 'cosa', fechaLanzamiento: new Date(), poster: 'https://medialab.unmsm.edu.pe/chiqaqnews/wp-content/uploads/2021/11/spiderman-no-way-home-819x1024.jpg'};

  guardarCambios(pelicula:PeliculaCreacionDTO){
    console.log(pelicula);
  }

}
