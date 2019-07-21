import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEmpleado } from '../models/empleado.model';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';

type EntityResponseType = HttpResponse<IEmpleado>;
type EntityArrayResponseType = HttpResponse<IEmpleado[]>;

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public resourceUrl = 'http://localhost:8084/api/v1/empleado-login';

  isLogged: boolean;

  constructor(
    protected http: HttpClient,
    private localStorage: LocalStorageService,
    private sessionStorage: SessionStorageService
    ) { }

  login(empleado: IEmpleado): Observable<EntityResponseType> {
    return this.http.post<IEmpleado>(this.resourceUrl, empleado, { observe: 'response' });
  }

  changeLogin(isLogged: boolean) {
    const token = this.localStorage.retrieve('authenticationToken') || this.sessionStorage.retrieve('authenticationToken');
    console.log(token);
    console.log(token === 'miguel');
    if (token) {
      console.log(token === 'miguel');
      if (token === 'miguel') {
        this.isLogged = true;
      } else {
        this.isLogged = false;
      }
    } else {
      this.isLogged = false;
    }
  }

}
