import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  implements OnInit {

  boton: boolean ;

  constructor() {}
  ngOnInit() {}

  emitir(pulsado: boolean) {
    this.boton = pulsado;
    console.log('app.component: Se ha pulsado HECHO', pulsado);
  }

}
