import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PeliculaCreacionDTO } from '../pelicula';
import { MultipleSelectorModel } from 'src/app/utilidades/selector-multiple/MultipleSelectorModel';

@Component({
  selector: 'app-formulario-pelicula',
  templateUrl: './formulario-pelicula.component.html',
  styleUrls: ['./formulario-pelicula.component.css']
})
export class FormularioPeliculaComponent implements OnInit{

  constructor(private formBuilder:FormBuilder){}

  form:FormGroup;

  @Input()
  modelo:PeliculaCreacionDTO|undefined;

  @Output()
  OnSubmit: EventEmitter<PeliculaCreacionDTO>=new EventEmitter<PeliculaCreacionDTO>();

  generosNoSeleccionados: MultipleSelectorModel[]=[
    {llave:1, valor: 'Drama'},
    {llave:2, valor: 'Acción'},
    {llave:3, valor: 'Comedia'},
  ]

  ngOnInit(): void {
    this.form=this.formBuilder.group({
      titulo: [
        '',
        {
          validators: [Validators.required]
        }
      ],
      resumen: '',
      enCines: false,
      trailer: '',
      fechaLanzamiento: '',
      poster: ''
    })

    if(this.modelo!==undefined){
      this.form.patchValue(this.modelo);
    }
  }

  guardarCambios(){
    this.OnSubmit.emit(this.form.value);
  }

  archivoSeleccionado(archivo:File){
    this.form.get('poster')?.setValue(archivo);
  }

  changeMarkdown(texto:any){
    this.form.get('resumen')?.setValue(texto);
  }
}