import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { actorCreacionDTO, actorDTO } from '../actor';

@Component({
  selector: 'app-formulario-actores',
  templateUrl: './formulario-actores.component.html',
  styleUrls: ['./formulario-actores.component.css']
})
export class FormularioActoresComponent {

  constructor(private formBuilder:FormBuilder){
    this.form = this.formBuilder.group({
      nombre: ['',{
        validators: [Validators.required],
      },],
      fechaNacimiento: '',
      foto: '',
      biografia: ''
    });

    if(this.modelo !== undefined){
      this.form.patchValue(this.modelo);
    }
  }

  form:FormGroup;

  @Input()
  modelo:actorDTO|undefined;

  @Output()
  OnSubmit :EventEmitter<actorCreacionDTO> = new EventEmitter<actorCreacionDTO>();

  archivoSeleccionado(file:any){
    this.form.get('foto')?.setValue(file);
  }

  cambioMarkdown(texto:string){
    this.form.get('biografia')?.setValue(texto);
  }

  onSubmit(){
    this.OnSubmit.emit(this.form.value);
  }

}
