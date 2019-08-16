export interface IControl {
  idControl?: number;
  controlNombre?: string;
  idLineaEnvasado?: number;
  idLineaEnvasadoNombre?: string;
  descripcionTarjeta1?: string;
  descripcionTarjeta2?: string;
  descripcionTarjeta3?: string;
  descripcionTarjeta4?: string;
  descripcionTarjeta5?: string;
  descripcionTarjeta6?: string;
  descripcionTarjeta7?: string;
  descripcionTarjeta8?: string;
  createdAt?: any;
  updatedAt?: any;
}

export class Control implements IControl {
  constructor(
    public idControl?: number,
    public controlNombre?: string,
    public idLineaEnvasado?: number,
    public idLineaEnvasadoNombre?: string,
    public descripcionTarjeta1?: string,
    public descripcionTarjeta2?: string,
    public descripcionTarjeta3?: string,
    public descripcionTarjeta4?: string,
    public descripcionTarjeta5?: string,
    public descripcionTarjeta6?: string,
    public descripcionTarjeta7?: string,
    public descripcionTarjeta8?: string,
    public createdAt?: any,
    public updatedAt?: any
  ) { }
}
