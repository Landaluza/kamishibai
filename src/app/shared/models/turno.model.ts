export interface ITurno {
    idtTurno?: number;
    nombreTurno?: string;
    desde?: number;
    hasta?: number;
}

export class Turno implements ITurno {
    constructor(
        public idtTurno?: number,
        public nombreTurno?: string,
        public desde?: number,
        public hasta?: number
    ) { }
}
