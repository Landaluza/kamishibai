export interface IEmpleado {
  idEmpleado?: number;
  nombre?: string;
  primerApellido?: string;
  segundoApellido?: string;
}

export class Empleado implements IEmpleado {
  constructor(public idEmpleado?: number, public nombre?: string, public primerApellido?: string, public segundoApellido?: string) {}
}
