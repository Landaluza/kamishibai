import { Moment } from 'moment';

export interface ITarjetaControl {
  idTarjetaControl?: number;
  descripcion?: string;
  horaTarea?: string;
  horaDesde?: number;
  horaHasta?: number;
  hora?: number;
  resultado?: string;
  observaciones?: string;
  idControlDiario?: number;
  enHora?: boolean;
  fechaHoraControl?: any;
  orden?: number;
  createdAt?: any;
  updatedAt?: any;
 }

export class TarjetaControl implements ITarjetaControl {
  constructor(
    public idTarjetaControl?: number,
    public descripcion?: string,
    public horaTarea?: string,
    public horaDesde?: number,
    public horaHasta?: number,
    public hora?: number,
    public resultado?: string,
    public observaciones?: string,
    public idControlDiario?: number,
    public enHora?: boolean,
    public fechaHoraControl?: any,
    public orden?: number,
    public createdAt?: any,
    public updatedAt?: any
    ) {}
}
