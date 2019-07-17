import { Component, OnInit } from '@angular/core';
import { ControlService } from '../../../shared/services/control.service';
import { IControl } from '../../../shared/models/control.model';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {

  controles: IControl[];

  constructor(private controlService: ControlService) { }

  ngOnInit() {
    this.controlService.queryAll().subscribe(response => {
      this.controles = response.body;
    });
  }

}
