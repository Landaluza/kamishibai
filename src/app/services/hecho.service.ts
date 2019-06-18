import { Injectable, Output, EventEmitter } from '@angular/core';
@Injectable({ providedIn: 'root' })

export class HechoService {
  // isOpen = false;
  @Output() hecho: EventEmitter<boolean> = new EventEmitter();



  // toggle() {
  //   // this.isOpen = !this.isOpen;
  //   // this.change.emit(this.isOpen);
  //   this.change.emit();
  // }
}
