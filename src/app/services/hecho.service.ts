import { Injectable, Output, EventEmitter } from '@angular/core';
@Injectable({ providedIn: 'root' })

export class HechoService {
   @Output() hecho: EventEmitter<object> = new EventEmitter();
 }
