import { Component, OnInit } from '@angular/core';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  implements OnInit {
  validate = false;
  constructor(
    private localStorage: LocalStorageService,
    private sessionStorage: SessionStorageService,
    private router: Router
  ) {}

  ngOnInit() {
    const token = this.localStorage.retrieve('authenticationToken') || this.sessionStorage.retrieve('authenticationToken');
    console.log(token);
    console.log(token === 'miguel');
    if (token) {
      console.log(token === 'miguel');
      if (token === 'miguel') {
        this.validate = true;
      } else {
        this.validate = false;
      }
    }
    console.log(this.validate);
  }

  logout() {
    this.localStorage.clear('authenticationToken');
    this.router.navigateByUrl('/login');
    this.validate = false;
  }
}
