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
  init = 60 - this.time.getMinutes();

  public counter = 0;

  @Output() onDecrease = new EventEmitter<number>();
  @Output() onComplete = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
    this.startCountDown();
  }

startCountDown() {
  if (this.init && this.init > 0) {
    this.counter = this.init;
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
console.log('count is ', this.counter);
if ( this.counter === 0) {
this.onComplete.emit();
console.log('--counter end--');
} else {
  this.doCountDown();
}
}

}
