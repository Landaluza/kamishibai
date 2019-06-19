import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { Observable } from 'rxjs/internal/Observable';



@Injectable({
  providedIn: 'root'
})
export class ConfirmacionService {

  btnConfirm: boolean;

  private btnConfirm$ = new Subject<any>();

  constructor() { }

  agregarConfirmacion(pulsado: boolean) {
    this.btnConfirm = pulsado;
    this.btnConfirm$.next(this.btnConfirm);
    console.log('agrego');
  }

  getConfirmacion$(): Observable<any> {
    return this.btnConfirm$.asObservable();
  }
}
