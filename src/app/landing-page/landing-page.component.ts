import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
  ngOnInit(): void {    
    this.peliculasEnCines=[{
      titulo: 'Spider-man',
      fechaLanzamiento: new Date(),
      precio: 1400.99,
      poster: 'https://th.bing.com/th/id/OIP.WnAMMuI8YKDz5UxkdoM05QHaKI?pid=ImgDet&rs=1'
    },
    {
      titulo: 'Whiplash',
      fechaLanzamiento: new Date('2018-12-25'),
      precio: 359.99,
      poster: 'https://th.bing.com/th/id/OIP.3k1xSWEtvCygNcqg2ttAaQHaLH?pid=ImgDet&rs=1'
    },
    { titulo: 'La Pasión',
      fechaLanzamiento: new Date('2014-3-7'),
      precio: 100.49,
      poster: 'https://th.bing.com/th/id/R.3b4cc422fab27cecf0526b7b069770fc?rik=a76k6asXAzeJ6g&pid=ImgRaw&r=0'
    }];   
  }
  
  peliculasEnCines:any;
  peliculasProximosEstrenos=[];

}
