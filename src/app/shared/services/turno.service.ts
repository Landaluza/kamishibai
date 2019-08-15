import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITurno } from '../models/turno.model';

type EntityResponseType = HttpResponse<ITurno>;
type EntityArrayResponseType = HttpResponse<ITurno[]>;

@Injectable()
export class TurnoService {
  public resourceUrl = 'http://localhost:8084/api/v1/turno';

  constructor(protected http: HttpClient) {}

  create(control: ITurno): Observable<EntityResponseType> {
    return this.http.post<ITurno>(this.resourceUrl, control, { observe: 'response' });
  }

  update(control: ITurno): Observable<EntityResponseType> {
    return this.http.put<ITurno>(this.resourceUrl, control, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<ITurno>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  queryAll(): Observable<EntityArrayResponseType> {
    return this.http.get<ITurno[]>(this.resourceUrl, { observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<any>> {
    return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

}
