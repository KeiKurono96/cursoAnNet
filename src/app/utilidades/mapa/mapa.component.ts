import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { tileLayer, latLng, LeafletMouseEvent, Marker, marker, icon } from 'leaflet';
import { Coordenada } from './coordenada';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  @Input()
  coordenadasIniciales: Coordenada[]=[];

  @Output()
  coordenadaSeleccionada: EventEmitter<Coordenada>=new EventEmitter<Coordenada>();

  ngOnInit(): void {
    this.capas = this.coordenadasIniciales.map(valor=>marker([valor.latitud,valor.longitud]));
  }

  options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    ],
    zoom: 14,
    center: latLng(-16.429437454893563, -71.52406454086305)
  };

  capas:Marker<any>[]=[];

  manejarClick(event:LeafletMouseEvent){
    const latitud = event.latlng.lat;
    const longitud = event.latlng.lng;
    console.log({latitud, longitud});

    this.capas=[];
    this.capas.push(marker([latitud,longitud], {
      icon:icon({
        iconSize:[25,41],
        iconAnchor:[13,41],
        iconUrl:'marker-icon.png',
        iconRetinaUrl: 'marker-icon-2x.png',
        shadowUrl: 'assets/marker-shadow.png'
      })
    }));
    this.coordenadaSeleccionada.emit({latitud:latitud, longitud:longitud});
  }
}