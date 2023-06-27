import OCTY_Model from "../models/sim.octy.model.js";
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

export const sim_OCTY_find = async (req, res) => {
    const id_oprv = req.query.id_oprv;
    const id_octy = req.query.id_octy;

    var condition;
    if (id_oprv) {
        condition = id_oprv ? { id_oprv: id_oprv } : null;
    } else {
        condition = id_octy ? { id_octy: id_octy } : null;
    }

    OCTY_Model.findAll({where: condition})
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