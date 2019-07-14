import { Injectable, Output, EventEmitter } from '@angular/core';
@Injectable({ providedIn: 'root' })

export class CounterService {
   @Output() counter: EventEmitter<object> = new EventEmitter();
 }
