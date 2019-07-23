import { Moment } from 'moment';

export interface ITarjetaControl {
  idTarjetaControl?: number;
  descripcion?: string;
  horaTarea?: string;
  hora?: number;
  resultado?: string;
  observaciones?: string;
  idControlDiario?: number;
  enHora?: boolean;
  fechaHoraControl?: Moment;
  createdAt?: any;
  updatedAt?: any;
 }

export class TarjetaControl implements ITarjetaControl {
  constructor(
    public idTarjetaControl?: number,
    public descripcion?: string,
    public horaTarea?: string,
    public hora?: number,
    public resultado?: string,
    public observaciones?: string,
    public idControlDiario?: number,
    public enHora?: boolean,
    public fechaHoraControl?: Moment,
    public createdAt?: any,
    public updatedAt?: any
    ) {}
}
