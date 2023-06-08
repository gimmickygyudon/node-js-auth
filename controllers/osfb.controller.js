import db from "../config/db.config.js";
import OSFB_Model from "../models/osfb.model.js";
import SFB1_Model from "../models/sfb1.model.js";
import SFB2_Model from "../models/sfb2.model.js";
import { Sequelize } from "sequelize";
const Op = db.Sequelize.Op;

Sequelize.addHook('beforeCount', function (options) {
  if (this._scope.include && this._scope.include.length > 0) {
    options.distinct = true
    options.col = this._scope.col || options.col || `"${this.options.name.singular}".id`
  }

  if (options.include && options.include.length > 0) {
    options.include = null
  }
})

function isEmptyObject(obj) {
    for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            return false;
        }
    }
    return true;
}

export const OSFB_create = async (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    req.body.is_active = "1"
    OSFB_Model.create(req.body)
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

export const OSFB_find_id_ousr = async (req, res) => {
    const id_osfb = req.query.id_osfb;
    var condition = id_osfb ? { id_osfb: id_osfb } : null;

    OSFB_Model.findAll({ where: condition })
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

export const OSFB_join_list = async (req, res) => {
    const id_ousr = req.query.id_ousr;
    var condition = id_ousr ? { id_ousr: id_ousr } : null;

    OSFB_Model.findAndCountAll({
        where: condition,
        offset: req.query.offset ? parseInt(req.query.offset) : null,
        limit: req.query.offset ? parseInt(req.query.limit) : null,
        order: [['document_date', 'DESC']],
        distinct: id_ousr,
        include: [{
            model:SFB1_Model,
            include: [{
                model:SFB2_Model,
            }]
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