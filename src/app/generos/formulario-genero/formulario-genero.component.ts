import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { primeraLetraMayuscula } from 'src/app/utilidades/validadores/primeraLetraMayuscula';
import { generoCreacionDTO } from '../genero';

@Component({
  selector: 'app-formulario-genero',
  templateUrl: './formulario-genero.component.html',
  styleUrls: ['./formulario-genero.component.css']
})
export class FormularioGeneroComponent implements OnInit {
  constructor(private fromBuilder: FormBuilder){
    this.form = this.fromBuilder.group({
      nombre: ['', {
        validators: [Validators.required, Validators.minLength(3),
          primeraLetraMayuscula()]
      }]
    });
  }

  form: FormGroup;

  @Input()
  modelo: generoCreacionDTO;

  @Output()
  submit: EventEmitter<generoCreacionDTO> = new EventEmitter<generoCreacionDTO>();

  ngOnInit(): void {
    if(this.modelo !== undefined){
      this.form.patchValue(this.modelo);
    }
  }

  guardarCambios(){
    this.submit.emit(this.form.value);
  }

  obtenerErrorCampoNombre(){
    var campo=this.form.get('nombre');
    if (campo?.hasError('required')){
      return 'El campo nombre es requerido';
    }
    if (campo?.hasError('minlength')){
      return 'La longitud mínima del nombre es de 3 caracteres';
    }
    if (campo?.hasError('primeraLetraMayuscula')){
      return campo.getError('primeraLetraMayuscula').mensaje;
    }
    return '';
  }
}
