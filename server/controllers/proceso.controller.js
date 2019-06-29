const Proceso = require('../models/proceso');

const procesoCtrl = {};

procesoCtrl.getProcesos = async (req, res, next) => {
    const procesos = await Proceso.find();
    res.json(procesos);
};

procesoCtrl.createProceso = async (req, res, next) => {
    const proceso = new Proceso({
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    });
    await proceso.save();
    res.json({status: 'Proceso creado.'});
};

procesoCtrl.getProceso = async (req, res, next) => {
    const { id } = req.params;
    const proceso = await Proceso.findById(id);
    res.json(proceso);
};

procesoCtrl.editProceso = async (req, res, next) => {
    const { id } = req.params;
    const proceso = {
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    };
    await Proceso.findByIdAndUpdate(id, {$set: proceso}, {new: true});
    res.json({status: 'Proceso actualizado.'});
};

procesoCtrl.deleteProceso = async (req, res, next) => {
    await Proceso.findByIdAndRemove(req.params.id);
    res.json({status: 'Proceso eliminado.'});
};

module.exports = procesoCtrl;