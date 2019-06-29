const mongoose = require('mongoose');
const { Schema } = mongoose;

// TODO: Crear Schema adecuado.
const procesoSchema = new Schema({
    name: { type: String, required: true},
    position: { type: String, required: true },
    office: { type: String, required: true },
    salary: { type: Number, required: true},

    // nombre: { type: String, required: true},
    // descripcion: { type: String, required: true},
    // propietario: { type: String, required: true},
    // timepoEstandar: { type: Number, required: true},
    // timepoMejor: { type: Number, required: true},
    // timepoPeor: { type: Number, required: true},

});

module.exports = mongoose.model('Proceso', procesoSchema);