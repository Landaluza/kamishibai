import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IControl } from '../models/control.model';

type EntityResponseType = HttpResponse<IControl>;
type EntityArrayResponseType = HttpResponse<IControl[]>;

@Injectable()
export class ControlService {
  public resourceUrl = 'http://localhost:8084/api/v1/control';

  constructor(protected http: HttpClient) {}

  create(control: IControl): Observable<EntityResponseType> {
    return this.http.post<IControl>(this.resourceUrl, control, { observe: 'response' });
  }

  update(control: IControl): Observable<EntityResponseType> {
    return this.http.put<IControl>(this.resourceUrl, control, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<IControl>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  queryAll(): Observable<EntityArrayResponseType> {
    return this.http.get<IControl[]>(this.resourceUrl, { observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<any>> {
    return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
