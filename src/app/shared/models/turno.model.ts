export interface ITurno {
    idtTurno?: number;
    nombreTurno?: string;
    desde?: number;
    hasta?: number;
    createdAt?: any;
    updatedAt?: any;
}

export class Turno implements ITurno {
    constructor(
        public idtTurno?: number,
        public nombreTurno?: string,
        public desde?: number,
        public hasta?: number,
        public createdAt?: any,
        public updatedAt?: any
    ) { }
}
