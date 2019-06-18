// https://stackoverflow.com/questions/56585165/how-change-elements-in-another-component
// https://angular.io/guide/component-interaction

import { Injectable, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MissionService {

  clickeao: any;

  isOpen = false;

  @Output() change: EventEmitter<boolean> = new EventEmitter();

  // Observable string sources
  private missionAnnouncedSource = new Subject<string>();
  private missionConfirmedSource = new Subject<string>();

  private botonPulsadoSource = new Subject<string>();

  // Observable string streams
  missionAnnounced$ = this.missionAnnouncedSource.asObservable();
  missionConfirmed$ = this.missionConfirmedSource.asObservable();

  botonPulsado$ = this.botonPulsadoSource.asObservable();

  toggle() {
    console.log('entro al toggle del service');
    this.isOpen = !this.isOpen;
    console.log(this.isOpen);
    this.change.emit(this.isOpen);
  }

  clieckarBoton(value: any) {
    console.log(value);
    this.clickeao = value;
  }
  // Service message commands
  announceMission(mission: string) {
    this.missionAnnouncedSource.next(mission);
  }

  confirmMission(astronaut: string) {
    this.missionConfirmedSource.next(astronaut);
  }

  botonSeHaPulsado(origen: string) {
     console.log(`Desde el service: se ha pulsado el botón  ${ origen }` );
     this.botonPulsadoSource.next(origen);
  }
}
