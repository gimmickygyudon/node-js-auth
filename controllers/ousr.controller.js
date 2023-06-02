import db from "../config/db.config.js";
import OUSR_Model from "../models/ousr.model.js";
const Op = db.Sequelize.Op;

function isEmptyObject(obj) {
    for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            return false;
        }
    }
    return true;
}

export const OUSR_create = async (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    const ousr = {
        id_ousr: req.body.id_ousr,
        login_type: req.body.login_type,
        user_email: req.body.user_email,
        user_name: req.body.user_name,
        phone_number: req.body.phone_number,
        user_password: req.body.user_password,
    };

    OUSR_Model.create(req.body)
        .then(data => {
            res.status(201).send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Tutorial."
            });
        });
}

export const OUSR_findAll = async (req, res) => {
    const user_email = req.query.user_email;
    var condition = user_email ? { user_email: user_email } : null;

    OUSR_Model.findAll({ where: condition })
        .then(data => {
            if (!isEmptyObject(data)) {
                res.status(200).send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find ousr with user_email=${user_email}.`
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

export const OUSR_findOne = async (req, res) => {
    const source = req.params.id_ousr;

    OUSR_Model.findByPk(id_ousr)
        .then(data => {
            if (!isEmptyObject(data)) {
                res.status(200).send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find olog with id_ousr=${id_ousr}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving olog with id_ousr=" + id_ousr
            });
        });
}