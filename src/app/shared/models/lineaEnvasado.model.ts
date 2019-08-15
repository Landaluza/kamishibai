export interface ILineaEnvasado {
  idLineaEnvasado?: number;
  descripcion?: string;
  createdAt?: any;
  updatedAt?: any;
 }

export class LineaEnvasado implements ILineaEnvasado {
  constructor(
    public idLineaEnvasado?: number,
    public descripcion?: string,
    public createdAt?: any,
    public updatedAt?: any
    ) {}
}
