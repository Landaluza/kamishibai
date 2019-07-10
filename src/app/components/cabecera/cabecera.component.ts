import { Component, OnInit, Renderer2, ViewChild, ElementRef} from '@angular/core';
import { HechoService } from '../../services/hecho.service';
import * as moment from 'moment';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {
  // horaControl: number;

  @ViewChild('counterText', {static: false}) counterText: ElementRef;
   time: Date;
   fecha = new Date();
  horaControl = this.time.getHours();

constructor(private renderer: Renderer2, public hechoService: HechoService) { }

ngOnInit() {
    this.hechoService.hecho.subscribe(($Event: any) => {
        if ($Event.hora > (this.horaControl + 7)) {
          console.log('borrar');
          this.renderer.setStyle(this.counterText.nativeElement, 'visibility', 'hidden' );
        } else {
          console.log('No borrar');
      }

  });



  }

}
