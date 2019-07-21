import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmpleado } from '../models/empleado.model';

type EntityResponseType = HttpResponse<IEmpleado>;
type EntityArrayResponseType = HttpResponse<IEmpleado[]>;

@Injectable()
export class EmpleadoService {
  public resourceUrl = 'http://localhost:8084/api/v1/empleado';

  constructor(protected http: HttpClient) {}

  create(empleado: IEmpleado): Observable<EntityResponseType> {
    return this.http.post<IEmpleado>(this.resourceUrl, empleado, { observe: 'response' });
  }

  update(empleado: IEmpleado): Observable<EntityResponseType> {
    return this.http.put<IEmpleado>(this.resourceUrl, empleado, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<IEmpleado>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  queryAll(): Observable<EntityArrayResponseType> {
    return this.http.get<IEmpleado[]>(this.resourceUrl, { observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<any>> {
    return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
