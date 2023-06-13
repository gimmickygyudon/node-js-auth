import OITM_Model from "../models/sim.oitm.model.js";
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

export const OITM_find_by_name = async (req, res) => {
    const item_description = req.query.item_description;
    var condition = item_description ? { item_description: { [Op.like]: `%${item_description}%` } } : null;

    OITM_Model.findAll({ where: condition })
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

export const OITM_find_id = async (req, res) => {
    const id_oitt = req.query.id_oitt;
    const id_brn1 = req.query.id_brn1;
    const id_brn1_array = id_brn1 ? JSON.parse("[" + id_brn1 + "]") : null;
    var condition = id_oitt ? { id_oitt: id_oitt, id_brn1: id_brn1_array } : null;

    OITM_Model.findAll({ where: condition })
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