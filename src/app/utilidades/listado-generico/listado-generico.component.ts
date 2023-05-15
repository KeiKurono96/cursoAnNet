import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-listado-generico',
  templateUrl: './listado-generico.component.html',
  styleUrls: ['./listado-generico.component.css']
})
export class ListadoGenericoComponent {

  @Input()
  listado:any;
  constructor() {}

  ngOnInit():void{

  }
}
