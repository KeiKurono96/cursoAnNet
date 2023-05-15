import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filtro-peliculas',
  templateUrl: './filtro-peliculas.component.html',
  styleUrls: ['./filtro-peliculas.component.css']
})
export class FiltroPeliculasComponent {
  constructor(private formBuilder:FormBuilder,
    private location:Location,
    private activatedRoute:ActivatedRoute){
    
    this.form = this.formBuilder.group(this.formularioOriginal)
    this.leerValoresURL();
    this.buscarPeliculas(this.form.value);
    
    this.form.valueChanges
      .subscribe(valores => {
        this.peliculas=this.peliculasOriginal;
        this.buscarPeliculas(valores);
        this.escibirParametrosBusquedaEnURL();
      })
  }

  formularioOriginal = {
    titulo: '',
    generoId: 0,
    proximosEstrenos: false,
    enCines: false,
  }

  public form:FormGroup

  generos = [
    {id:1,nombre:'Drama'},
    {id:2,nombre:'Acción'},
    {id:3,nombre:'Fantasía'}    
  ]

  peliculas=[
    {titulo: 'Guardianes de la Galaxia 3', enCines:true, 
      proximosEstrenos: false, generos: [1,2], poster: 
      'https://assets-prd.ignimgs.com/2023/02/13/guardians-of-the-galaxy-vol-three-newbutton-1676306275720.jpg'},
    {titulo: 'Meg 2: The Trench', enCines:false, 
      proximosEstrenos: true, generos: [2,3], poster: 
      'https://m.media-amazon.com/images/M/MV5BZjYyYzYzMDktNzQxMC00NGM0LTljYjYtZjUyYzZkNjZlYzAwXkEyXkFqcGdeQXVyMTI0NDgxMjQ0._V1_.jpg'},
    {titulo: 'Fast X', enCines:false, 
      proximosEstrenos: true, generos: [2], poster: 
      'https://cloudfront-us-east-1.images.arcpublishing.com/infobae/VW6GWH7SPFG67A4SJP3E7KVBTI.jpeg'},
  ]

  peliculasOriginal = this.peliculas;
  
  private leerValoresURL(){
    this.activatedRoute.queryParams.subscribe((params)=>{
      var objeto:any={};
      
      if(params['titulo']){
        objeto.titulo=params['titulo'];
      }
      if(params['generoId']){
        objeto.generoId=params['generoId'];
      }
      if(params['proximosEstrenos']){
        objeto.proximosEstrenos=params['proximosEstrenos'];
      }
      if(params['enCines']){
        objeto.enCines=params['enCines'];
      }

      this.form.patchValue(objeto);
    });
  }

  private escibirParametrosBusquedaEnURL(){
    var queryStrings = [];
    var valoresFormulario = this.form.value;
    if(valoresFormulario.titulo){
      queryStrings.push(`titulo=${valoresFormulario.titulo}`);
    }
    if(valoresFormulario.generoId!='0'){
      queryStrings.push(`generoId=${valoresFormulario.generoId}`);
    }
    if(valoresFormulario.proximosEstrenos){
      queryStrings.push(`proximosEstrenos=${valoresFormulario.proximosEstrenos}`);
    }
    if(valoresFormulario.enCines){
      queryStrings.push(`enCines=${valoresFormulario.enCines}`);
    }
    this.location.replaceState('peliculas/buscar',queryStrings.join('&'))
  }

  buscarPeliculas(valores: any){
    if(valores.titulo){
      this.peliculas=this.peliculas.filter(pelicula=>
        pelicula.titulo.indexOf(valores.titulo)!==-1);
    }
    if(valores.generoId){
      this.peliculas=this.peliculas.filter(pelicula=>
        pelicula.generos.indexOf(valores.generoId)!==-1);
    }
    if(valores.proximosEstrenos){
      this.peliculas=this.peliculas.filter(pelicula=>
        pelicula.proximosEstrenos);
    }
    if(valores.enCines){
      this.peliculas=this.peliculas.filter(pelicula=>
        pelicula.enCines);
    }
  }

  limpiar(){
    this.form.patchValue(this.formularioOriginal);
  }
}
