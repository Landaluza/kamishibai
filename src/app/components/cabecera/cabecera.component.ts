import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { HechoService } from '../../services/hecho.service';
import { CounterService } from '../../services/counter.service';
import { LocalStorageService } from 'ngx-webstorage';
import { ILineaEnvasado } from '../../shared/models/lineaEnvasado.model';
import { IControl } from '../../shared/models/control.model';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  lineaEnvasado: ILineaEnvasado;
  control: IControl;
  @ViewChild('counterText', { static: false }) counterText: ElementRef;
  verCounter = true;

  constructor(
    private renderer: Renderer2,
    public hechoService: HechoService,
    private counterService: CounterService,
    private localStorage: LocalStorageService
  ) { }

  ngOnInit() {
    this.lineaEnvasado = this.localStorage.retrieve('lineaEnvasado');
    this.control = this.localStorage.retrieve('control');
    console.log(this.control);
    this.hechoService.hecho.subscribe(($Event: any) => {
      this.verCounter = false;
      this.renderer.setStyle(this.counterText.nativeElement, 'visibility', 'hidden');
    });

    this.counterService.counter.subscribe(($Event: any) => {
      this.verCounter = true;
      this.renderer.setStyle(this.counterText.nativeElement, 'visibility', 'visible');
    });



  }
}
