import { Component } from '@angular/core';
import { actorCreacionDTO } from '../actor';

@Component({
  selector: 'app-crear-actor',
  templateUrl: './crear-actor.component.html',
  styleUrls: ['./crear-actor.component.css']
})
export class CrearActorComponent {

  guardarCambios(actor:actorCreacionDTO){
    console.log(actor);
    
  }

}
