export interface IControl {
  idControl?: number;
  controlNombre?: string;
  idLineaEnvasado?: number;
  idLineaEnvasadoNombre?: string;
  createdAt?: any;
  updatedAt?: any;
}

export class Control implements IControl {
  constructor(
    public idControl?: number,
    public controlNombre?: string,
    public idLineaEnvasado?: number,
    public idLineaEnvasadoNombre?: string,
    public createdAt?: any,
    public updatedAt?: any
  ) { }
}
