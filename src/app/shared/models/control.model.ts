export interface IControl {
  idControl?: number;
  controlNombre?: string;
  idLineaEnvasado?: number;
}

export class Control implements IControl {
  constructor(
    public idControl?: number,
    public controlNombre?: string,
    public idLineaEnvasado?: number,
  ) { }
}
