// https://www.udemy.com/componentes-angular-pro/learn/lecture/7308670#overview
import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit {

  // @Input() init: number = null;

  time = new Date();
  public hora = this.time.getHours();
  init = 61 - this.time.getMinutes();
  segundos = 0;
  public counter = 0;

  @Output() onDecrease = new EventEmitter<number>();
  @Output() onComplete = new EventEmitter<void>();

  @Output() onIniciar = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
    // Para que el counter cambie en el segundo 0 del primer minuto.
    this.counter = 60 - this.time.getMinutes();
    // console.log('Minutos iniciales: ', this.counter);
    // console.log( 'Hora del control: ', this.hora);
    this.segundos = this.time.getSeconds();
    setTimeout(() => this.startCountDown() , (60 - this.segundos) * 1000);
     }

startCountDown() {
  if (this.init && this.init > 0) {
    this.counter = this.counter - 1;
    this.doCountDown();
  }
}

doCountDown() {
setTimeout(() => {
this.counter = this.counter - 1;
this.processCount();
}, 60000);
}

processCount() {
this.onDecrease.emit(this.counter);
// console.log('count is ', this.counter);
if ( this.counter === 0) {
this.onComplete.emit();
this.counter = 60;
// console.log('--counter end--');
} else {

}
this.doCountDown();
}

// Tiene que mostrar la card corespondiente a la hora actual en el row-cards.component.html
emitirHoraActual() {
  this.onDecrease.emit(this.hora);

}


}
