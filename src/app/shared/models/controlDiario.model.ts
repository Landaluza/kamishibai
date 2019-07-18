import { Moment } from 'moment';

export interface IControlDiario {
  idControlDiario?: number;
  idControl?: number;
  turno?: number;
  fecha?: Moment;
  idEmpleado?: number;
 }

export class ControlDiario implements IControlDiario {
  constructor(
   public idControlDiario?: number,
   public fecha?: Moment,
   public idControl?: number,
   public turno?: number,
   public idEmpleado?: number,
        ) {}
}
