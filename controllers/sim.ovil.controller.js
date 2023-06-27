import OVIL_Model from "../models/sim.ovil.model.js";
import db_sim from "../config/sim.db.config.js";
const Op = db_sim.Sequelize.Op;

function isEmptyObject(obj) {
    for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            return false;
        }
    }
    return true;
}

export const sim_OVIL_find = async (req, res) => {
    const id_osdt = req.query.id_osdt;
    const id_ovil = req.query.id_ovil;

    var condition;
    if (id_osdt) {
        condition = id_osdt ? { id_osdt: id_osdt } : null;
    } else {
        condition = id_ovil ? { id_ovil: id_ovil } : null;
    }

    OVIL_Model.findAll({where: condition})
        .then(data => {
            if (!isEmptyObject(data)) {
                res.status(200).send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find olog with source=${source}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving tutorials."
            });
        });
}