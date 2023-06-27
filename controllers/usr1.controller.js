import db from "../config/db.config.js";
import USR1_Model from "../models/usr1.model.js";
const Op = db.Sequelize.Op;

function isEmptyObject(obj) {
    for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            return false;
        }
    }
    return true;
}

export const USR1_findby_id = async (req, res) => {
    const id_usr1 = req.query.id_usr1;
    var condition = id_usr1 ? { id_usr1: id_usr1 } : null;

    USR1_Model.findAll({ where: condition })
        .then(data => {
            if (!isEmptyObject(data)) {
                res.status(200).send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find usr1 with source=${source}.`
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