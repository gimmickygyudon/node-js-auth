import { sim_BRN1_MODEL } from "../models/sim.brn1.model.js";
import { sim_OITM_MODEL } from "../models/sim.oitm.model.js";

function isEmptyObject(obj) {
    for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            return false;
        }
    }
    return true;
}

export const Item_name_retrieve = async (req, res) => {
    sim_BRN1_MODEL.findAll()
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

export const Item_retrieve = async (req, res) => {
    const id_brn1 = req.query.id_brn1;
    const id_brn1_array = id_brn1 ? JSON.parse("[" + id_brn1 + "]") : null;
    var condition = id_brn1 ? { id_brn1: id_brn1_array } : null;

    sim_BRN1_MODEL.findAll({
        where: condition,
        distinct: id_brn1,
        order: [
            [ { model:sim_OITM_MODEL }, 'spesification', 'DESC' ]
        ],
        include: [{
            where: condition,
            plain: true,
            distinct: id_brn1,
            model:sim_OITM_MODEL
        }]
    })
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

export const Item_description_retrieve = async (req, res) => {
    const id_oitm = req.query.id_oitm;
    var condition = id_oitm ? { id_oitm: id_oitm } : null;

    sim_OITM_MODEL.findAll({ where: condition })
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