import { Injectable, Output, EventEmitter } from '@angular/core';
@Injectable({ providedIn: 'root' })

export class HechoService {
   @Output() hecho: EventEmitter<object> = new EventEmitter();
   @Output() hecho8: EventEmitter<boolean> = new EventEmitter();
   @Output() hecho9: EventEmitter<boolean> = new EventEmitter();
   @Output() hecho10: EventEmitter<boolean> = new EventEmitter();
}
