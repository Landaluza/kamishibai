export interface ITarjetaControl {
  idTarjetaControl?: number;
  hora?: number;
  resultado?: string;
  observaciones?: string;
  idControlDiario?: number;
  enHora?: boolean;
 }

export class TarjetaControl implements ITarjetaControl {
  constructor(
    public idTarjetaControl?: number,
    public hora?: number,
    public resultado?: string,
    public observaciones?: string,
    public idControlDiario?: number,
    public enHora?: boolean,
    ) {}
}
