import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reloj',
  templateUrl: './reloj.component.html',
  styleUrls: ['./reloj.component.css']
})
export class RelojComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.onload = function() {
      clock();
      function clock() {
        const now = new Date();
        const TwentyFourHour = now.getHours();
        let hour = now.getHours();
        let min: any = now.getMinutes();
        const sec = now.getSeconds();
        let mid = 'PM';
        if (min < '10') {
          min = '0' + min;
        }
        if (hour > 12) {
          hour = hour - 12;
        }
        if (hour === 0) {
          hour = 12;
        }
        if (TwentyFourHour < 12) {
           mid = 'AM';
        }
        document.getElementById('currentTime').innerHTML =     hour + ':' + min + ':' + sec + ' ' + mid ;
        setTimeout(clock, 1000);
        }
    }
  }

}
