import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILineaEnvasado } from '../models/lineaEnvasado.model';
import { environment } from 'src/environments/environment';

type EntityResponseType = HttpResponse<ILineaEnvasado>;
type EntityArrayResponseType = HttpResponse<ILineaEnvasado[]>;

@Injectable()
export class LineaEnvasadoService {
  public resourceUrl = environment.apiUrl + '/api/v1/lineaEnvasado';

  constructor(protected http: HttpClient) {}

  create(lineaEnvasado: ILineaEnvasado): Observable<EntityResponseType> {
    return this.http.post<ILineaEnvasado>(this.resourceUrl, lineaEnvasado, { observe: 'response' });
  }

  update(lineaEnvasado: ILineaEnvasado): Observable<EntityResponseType> {
    return this.http.put<ILineaEnvasado>(this.resourceUrl, lineaEnvasado, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<ILineaEnvasado>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  queryAll(): Observable<EntityArrayResponseType> {
    return this.http.get<ILineaEnvasado[]>(this.resourceUrl, { observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<any>> {
    return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
