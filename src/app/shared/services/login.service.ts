import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEmpleado } from '../models/empleado.model';

type EntityResponseType = HttpResponse<IEmpleado>;
type EntityArrayResponseType = HttpResponse<IEmpleado[]>;

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public resourceUrl = 'http://localhost:8084/api/v1/empleado-login';

  constructor(protected http: HttpClient) { }

  login(empleado: IEmpleado): Observable<EntityResponseType> {
    return this.http.post<IEmpleado>(this.resourceUrl, empleado, { observe: 'response' });
  }

}
