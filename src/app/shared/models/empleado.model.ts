export interface IEmpleado {
  idEmpleado?: number;
  nombre?: string;
  primerApellido?: string;
  segundoApellido?: string;
  userName?: string;
  password?: string;
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
    public createdAt?: any,
    public updatedAt?: any
    ) {}
}
