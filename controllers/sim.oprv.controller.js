import OPRV_Model from "../models/sim.oprv.model.js";
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

export const sim_OPRV_find_name = async (req, res) => {
    const province_name = req.query.province_name;
    var condition = province_name ? { province_name: province_name } : null;

    OPRV_Model.findAll({where: condition})
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