export class Proceso {
// TODO: Crear campos adecuados.
// FIXME: Solo para probar los colores.

// El modelo de dados para la BBDD en MongoDb esta definido en:
// server\models\proceso.js

// Para crear un proceso por defecto con valores predeterminados.
constructor(_id = '', name = '', position = '', office = '', salary = null) {
        this._id = _id;
        this.name = name;
        this.position = position;
        this.office = office;
        this.salary = salary;
    }

// Esquema de los datos.
    _id: string;
    name: string;
    position: string;
    office: string;
    salary: number;
}
