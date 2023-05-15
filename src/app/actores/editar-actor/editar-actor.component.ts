import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { actorCreacionDTO, actorDTO } from '../actor';

@Component({
  selector: 'app-editar-actor',
  templateUrl: './editar-actor.component.html',
  styleUrls: ['./editar-actor.component.css']
})
export class EditarActorComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute){}

  modelo:actorDTO={nombre:'André', fechaNacimiento:new Date(), foto:'https://c8.alamy.com/compes/2jjfk4m/foto-del-archivo-arnold-schwarzenegger-celebra-su-75th-cumpleanos-el-30-de-julio-de-2022-sn14109724vm-jpg-arnold-schwarzenegger-ee-uu-actor-formato-vertical-y-horizontal-sven-simon-huyssenallee-40-42-45128-essen-tel-0201-234556-fax-0201-234539-cuenta-2039154-deutsche-bank-munich-blz-700-700-10-la-imagen-se-puede-transmitir-digitalmente-a-traves-de-leonardo-pro-2jjfk4m.jpg'}

  ngOnInit():void{
    this.activatedRoute.params.subscribe(params => {
      // alert(params['id']);
    })
  }

  guardarCambios(actor:actorCreacionDTO){
    console.log(actor);
  }
}
