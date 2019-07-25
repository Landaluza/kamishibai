import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITarjetaControl } from '../models/tarjetaControl.model';

type EntityResponseType = HttpResponse<ITarjetaControl>;
type EntityArrayResponseType = HttpResponse<ITarjetaControl[]>;

@Injectable()
export class TarjetaControlService {
  public resourceUrl = 'http://localhost:8084/api/v1/tarjetaControl';

  constructor(protected http: HttpClient) {}

  create(tarjetaControl: ITarjetaControl): Observable<EntityResponseType> {
    return this.http.post<ITarjetaControl>(this.resourceUrl, tarjetaControl, { observe: 'response' });
  }

  update(tarjetaControl: ITarjetaControl): Observable<EntityResponseType> {
    return this.http.put<ITarjetaControl>(this.resourceUrl, tarjetaControl, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<ITarjetaControl>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  queryAll(): Observable<EntityArrayResponseType> {
    return this.http.get<ITarjetaControl[]>(this.resourceUrl, { observe: 'response' });
  }

  queryAllByControlDiario(idControlDiario: number): Observable<EntityArrayResponseType> {
    return this.http.get<ITarjetaControl[]>(`${this.resourceUrl}/empleado/${idControlDiario}`, { observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<any>> {
    return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
