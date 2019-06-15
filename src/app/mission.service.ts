// https://stackoverflow.com/questions/56585165/how-change-elements-in-another-component
// https://angular.io/guide/component-interaction

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class MissionService {

  // Observable string sources
  private missionAnnouncedSource = new Subject<string>();
  private missionConfirmedSource = new Subject<string>();

  private botonPulsadoSource = new Subject<string>();

  // Observable string streams
  missionAnnounced$ = this.missionAnnouncedSource.asObservable();
  missionConfirmed$ = this.missionConfirmedSource.asObservable();

  botonPulsado$ = this.botonPulsadoSource.asObservable();


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
