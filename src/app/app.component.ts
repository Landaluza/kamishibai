import { Component, OnInit } from '@angular/core';
import { now } from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  implements OnInit {
  fecha = now();
  version = '0.0.1';

  ngOnInit() {}
  constructor() {}
}
