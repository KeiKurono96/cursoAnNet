import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { primeraLetraMayuscula } from 'src/app/utilidades/validadores/primeraLetraMayuscula';
import { generoCreacionDTO } from '../genero';

@Component({
  selector: 'app-crear-genero',
  templateUrl: './crear-genero.component.html',
  styleUrls: ['./crear-genero.component.css']
})
export class CrearGeneroComponent implements OnInit {

  constructor(private router:Router){
    
  }

  ngOnInit(): void {
    
  }

  guardarCambios(genero:generoCreacionDTO){
    // this.router.navigate(['/generos']);
    // alert("Se ha guardado el género (mensaje default)");
    console.log(genero) ;
  }
}