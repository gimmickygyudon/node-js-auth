import db from "../config/db.config.js";
import SFB2_Model from "../models/sfb2.model.js";
import uploadFile from "../middleware/upload.js";
const Op = db.Sequelize.Op;

function isEmptyObject(obj) {
    for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            return false;
        }
    }
    return true;
}

function removeExtension(filename) {
  return filename.substring(0, filename.lastIndexOf('.')) || filename;
}

export const SFB2_create = async (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    try {
        await uploadFile(req, res);

        if (req.file == undefined) {
            return res.status(400).send({ message: "Please upload a file!" });
        }

        req.body.file_path = "/resources/static/assets/uploads/" + req.file.filename;
        SFB2_Model.create(req.body)
        .then(data => {
            res.status(201).send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Tutorial."
            });
        });   
    } catch (error) {
        res.status(500).send({
            message: `Could not upload the file: ${req.file.originalname}. ${error}`,
        });
    }
}

export const SFB2_find_id_ousr = async (req, res) => {
    const id_osfb = req.query.id_osfb;
    var condition = id_osfb ? { id_osfb: id_osfb } : null;

    SFB2_Model.findAll({ where: condition })
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
