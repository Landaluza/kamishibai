export const enum Rol {
  ADMINISTRADOR = 'ADMINISTRADOR',
  USUARIO = 'USUARIO'
}

export interface IEmpleado {
  idEmpleado?: number;
  nombre?: string;
  primerApellido?: string;
  segundoApellido?: string;
  userName?: string;
  password?: string;
  rol?: Rol;
  createdAt?: any;
  updatedAt?: any;
}

export class Empleado implements IEmpleado {
  constructor(
    public idEmpleado?: number,
    public nombre?: string,
    public primerApellido?: string,
    public segundoApellido?: string,
    public userName?: string,
    public password?: string,
    public rol?: Rol,
    public createdAt?: any,
    public updatedAt?: any
    ) {}
}
