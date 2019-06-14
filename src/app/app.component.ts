import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  implements OnInit {

  ngOnInit() {}
  constructor() {}


  prueba(pulsado: boolean) {
console.log('app.component: Se ha pulsado HECHO');
  }
}
