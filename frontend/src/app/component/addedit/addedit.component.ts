import { Component, OnInit } from '@angular/core';

import { ProcesoService } from '../../services/proceso.service';
import { NgForm } from '@angular/forms';
import { Proceso } from '../../models/proceso';

// import { ModalContentComponent } from '../modal-content/modal-content.component';
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-addedit',
  templateUrl: './addedit.component.html',
  styleUrls: ['./addedit.component.css'],
  providers: [ProcesoService]
})

export class AddeditComponent implements OnInit {
  // Aúnque haga Public procesoService marcaba un error en el html (aunque funcionaba)
  // Para poder usarlas sin problemas en el html se declaran estas dos variables.
  public procesos: Proceso[];
  public selectedProceso: Proceso;

  // constructor(private procesoService: ProcesoService, public modalService: NgbModal) {}
  constructor(private procesoService: ProcesoService) {}

  ngOnInit() {
    this.getProcesos();
    this.selectedProceso = this.procesoService.selectedProceso;
  }

  addProceso(form?: NgForm) {
    if (form.value._id) {
      console.log('Se ha pulsado grabar con ID. Para editar.' + form.value._id);
      this.procesoService.putProceso(form.value).subscribe(res => {
        this.resetForm(form);
        this.getProcesos();

        Swal.fire({
          position: 'top-end',
          type: 'success',
          title: 'Actualización correcta.',
          showConfirmButton: false,
          timer: 2500
        });
      });
    } else {
      console.log('Se ha pulsado grabar sin ID. Para añadir.');
      this.procesoService.postProceso(form.value).subscribe(res => {
        this.resetForm(form);
        this.getProcesos();

        Swal.fire({
          position: 'top-end',
          type: 'success',
          title: 'Guardado correctamente.',
          showConfirmButton: false,
          timer: 1500
        });
      });
    }
  }

  getProcesos() {
    this.procesoService.getProcesos().subscribe(res => {
      this.procesos = res as Proceso[];
    });
  }

  // TODO: Hay que pasar los datos para editar
  // https://medium.com/@izzatnadiri/how-to-pass-data-to-and-receive-from-ng-bootstrap-modals-916f2ad5d66e
  editProceso(proceso: Proceso) {
    // this.procesoService.selectedProceso = proceso;
    // al declarar selectedProceso como public hay que cambiar esta linea para que funcione editar.
    console.log('editar');
    this.selectedProceso = proceso;
  }

  // deleteProceso(_id: string, form: NgForm) {
  deleteProceso(_id: string) {

    Swal.fire({
      title: '¿Estas seguro?',
      text: '¡El borrado no se puede deshacer!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, borralo.'
    }).then(result => {
      if (result.value) {
        this.procesoService.deleteProceso(_id).subscribe(res => {
          this.getProcesos();
          // this.resetForm(form);
        });
        // Swal.fire('¡Borrado!');
        Swal.fire({
          position: 'top-end',
          type: 'success',
          title: 'El proceso ha sido borrado',
          showConfirmButton: false,
          timer: 1500
        });
      }
    });
  }

  viewProceso(proceso: Proceso) {
    console.log('viewProceso');
    this.procesoService.selectedProceso = proceso;
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.procesoService.selectedProceso = new Proceso();
      this.getProcesos();
    }
  }

  // openModal() {
  //   const modalRef = this.modalService.open(ModalContentComponent);
  //   // const modalRef = this.modalService.open(ModalContentComponent, { centered: true });
  //   // modalRef.componentInstance.user = this.user;
  // }

}
