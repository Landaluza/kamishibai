import { Component, OnInit, Renderer2, ViewChild, ElementRef} from '@angular/core';
import { HechoService } from '../../services/hecho.service';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

@ViewChild('counterText', {static: false}) counterText: ElementRef;
verCounter = true;

constructor(private renderer: Renderer2, public hechoService: HechoService) { }

ngOnInit() {
    this.hechoService.hecho.subscribe(($Event: any) => {
       this.verCounter = false;
       this.renderer.setStyle(this.counterText.nativeElement, 'visibility', 'hidden' );
    });
  }
}
