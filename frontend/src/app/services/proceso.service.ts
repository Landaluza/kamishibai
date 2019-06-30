// Comienza la explicación en el minuto 18:30 del video.
// Estos metodos se podrán utilizar en cualquier parte de la app.


import { Injectable } from '@angular/core';
// Para comunicar el frontend con el servidor.
import { HttpClient } from '@angular/common/http';

import { Proceso } from '../models/proceso';

@Injectable({
  providedIn: 'root'
})
export class ProcesoService {
  // En selectedProceso tendremos los datos del proceso con el esquema definido.
  selectedProceso: Proceso;
  // Almacenamos los datos en este array.
  procesos: Proceso[];
  readonly URL_API = 'http://localhost:3000/api/procesos';

  static getProcesos(): any {
    throw new Error('Método no implementado.');
  }

  // Se instancia HttpClient en el constructor para poder tener disponible la propiedad http,
  // y poder hacer consultas al servidor.
  constructor(private http: HttpClient) {
    this.selectedProceso = new Proceso();
  }

  postProceso(proceso: Proceso) {
    console.log('postProceso');
    return this.http.post(this.URL_API, proceso);
  }

  getProcesos() {
    return this.http.get(this.URL_API);
  }

  putProceso(proceso: Proceso) {
    return this.http.put(this.URL_API + `/${proceso._id}`, proceso);
  }

  deleteProceso(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}
