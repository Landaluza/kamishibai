export interface ILineaEnvasado {
  idLineaEnvasado?: number;
  descripcion?: string;
 }

export class LineaEnvasado implements ILineaEnvasado {
  constructor(
    public idLineaEnvasado?: number,
    public descripcion?: string,
    ) {}
}
