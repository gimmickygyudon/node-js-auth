import { db_sim } from "../config/db.config.js";
import sim_BRN1_MODEL from "../models/sim.brn1.model.js";
import sim_OITM_MODEL from "../models/sim.oitm.model.js";
const Op = db_sim.Sequelize.Op;

function isEmptyObject(obj) {
    for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            return false;
        }
    }
    return true;
}

export const sim_BRN1_find_id = async (req, res) => {
    const id_brn1 = req.query.id_brn1;
    const id_brn1_array = id_brn1 ? JSON.parse("[" + id_brn1 + "]") : null;
    var condition = id_brn1 ? { id_brn1: id_brn1_array } : null;

    sim_BRN1_MODEL.findAll({ 
        where: condition,
        distinct: id_brn1,
        include: [{
            plain: true,
            distinct: id_brn1,
            plain: true,
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