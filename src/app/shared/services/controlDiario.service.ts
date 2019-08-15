import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IControlDiario } from '../models/controlDiario.model';
import { environment } from 'src/environments/environment';

type EntityResponseType = HttpResponse<IControlDiario>;
type EntityArrayResponseType = HttpResponse<IControlDiario[]>;

@Injectable()
export class ControlDiarioService {
  public resourceUrl = environment.apiUrl + '/api/v1/controlDiario';

  constructor(protected http: HttpClient) {}

  create(controlDiario: IControlDiario): Observable<EntityResponseType> {
    return this.http.post<IControlDiario>(this.resourceUrl, controlDiario, { observe: 'response' });
  }

  update(controlDiario: IControlDiario): Observable<EntityResponseType> {
    return this.http.put<IControlDiario>(this.resourceUrl, controlDiario, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<IControlDiario>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  findAllByEmpleado(idEmpleado: number): Observable<EntityArrayResponseType> {
    return this.http.get<IControlDiario[]>(`${this.resourceUrl + '/empleado'}/${idEmpleado}`, { observe: 'response' });
  }

  queryAll(): Observable<EntityArrayResponseType> {
    return this.http.get<IControlDiario[]>(this.resourceUrl, { observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<any>> {
    return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
