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
                    err.message || "Some error occurred while creating user."
            });
        });
}

export const OUSR_find_user = async (req, res) => {
    const user_email = req.query.user_email;
    const phone_number = req.query.phone_number;
    // FOR SEARCH SIMILIAR
    // var condition = source ? { user_email: { [Op.like]: `%${user_email}%` } } : null;
    var condition;

    if (user_email && phone_number) { 
        condition = { user_email: user_email, phone_number: phone_number } 
    }
    else if (user_email && !phone_number) { 
        condition = { user_email: user_email } 
    }
    else if(phone_number && !user_email)  {
        condition = { phone_number: phone_number }
    } else { null }

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
                    err.message || "Some error occurred while retrieving user email."
            });
        });
}