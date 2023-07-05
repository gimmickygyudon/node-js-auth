import db from "../config/db.config.js";
import USR2_Model from "../models/usr2.model.js";
const Op = db.Sequelize.Op;

function isEmptyObject(obj) {
    for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            return false;
        }
    }
    return true;
}

export const customer_create = async (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    USR2_Model.create(req.body)
        .then(data => {
            res.status(201).send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating user."
            });
        });
}

export const customer_retrieve = async (req, res) => {
    const id_ousr = req.query.id_ousr;
    var condition = id_ousr ? { id_ousr: id_ousr } : null;

    USR2_Model.findAll({ where: condition })
        .then(data => {
            if (!isEmptyObject(data)) {
                res.status(200).send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find ousr with id_ousr=${id_ousr}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving user email."
            });
        });
}

export const customer_delete = (req, res) => {
    const id_usr2 = req.query.id_usr2;
    const id_usr2_array = id_usr2 ? JSON.parse("[" + id_usr2 + "]") : null;

    USR2_Model.destroy({
        where: { id_usr2: id_usr2_array }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Customer was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Customer with id_usr2=${id_usr2}. Maybe Tutorial was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Customer with id_usr2=" + id_usr2
            });
        });
};