import OSDT_Model from "../models/sim.osdt.model.js";
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

export const sim_OSDT_find = async (req, res) => {
    const id_octy = req.query.id_octy;
    const id_osdt = req.query.id_osdt;

    var condition;
    if (id_octy) {
        condition = id_octy ? { id_octy: id_octy } : null;
    } else {
        condition = id_osdt ? { id_osdt: id_osdt } : null;
    }

    OSDT_Model.findAll({where: condition})
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