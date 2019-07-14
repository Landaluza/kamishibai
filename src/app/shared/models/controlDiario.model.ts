export interface IControlDiario {
  idControlDiario?: number;
  idControl?: number;
  turno?: number;
  fecha?: Date;
  idEmpleado?: number;
 }

export class ControlDiario implements IControlDiario {
  constructor(
   public idControlDiario?: number,
   public fecha?: Date,
   public idControl?: number,
   public turno?: number,
   public idEmpleado?: number,
        ) {}
}
