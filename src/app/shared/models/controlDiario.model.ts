import { Moment } from 'moment';

export interface IControlDiario {
  idControlDiario?: number;
  idControl?: number;
  turno?: number;
  fecha?: any;
  idEmpleado?: number;
  idtTurno?: number;
  createdAt?: any;
  updatedAt?: any;
 }

export class ControlDiario implements IControlDiario {
  constructor(
   public idControlDiario?: number,
   public fecha?: any,
   public idControl?: number,
   public turno?: number,
   public idEmpleado?: number,
   public idtTurno?: number,
   public createdAt?: any,
   public updatedAt?: any
        ) {}
}
