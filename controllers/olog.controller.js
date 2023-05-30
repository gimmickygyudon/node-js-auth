// import db from "../models/index.js";
import Olog from "../config/db.config.js";
import Model from "../models/olog.model.js";
const Op = Olog.Sequelize.Op;

// Create and Save a new Tutorial
export const create = async (req, res) => {
    // Validate request
    if (!req.body.id_olog) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a Tutorial
    const olog = {
        id_olog: req.body.id_olog,
        date_time: req.body.date_time,
        form_sender: req.body.form_sender,
        remarks: req.body.remarks,
        source: req.body.source,
    };

    // Save Tutorial in the database
    
    Model.create(req.body)
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

// Retrieve all Tutorials from the database.
export const findAll = async (req, res) => {
    const source = req.query.source;
    var condition = source ? { source: { [Op.like]: `%${source}%` } } : null;

    Model.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving tutorials."
            });
        });
}

// Find a single Tutorial with an id
export const findOne = async (req, res) => {
    const source = req.params.id_olog;

    Model.findByPk(id_olog)
        .then(data => {
            if (data) {
                res.status(200).send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find olog with id_olog=${id_olog}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving olog with id_olog=" + id_olog
            });
        });
}

// Update a Tutorial by the id in the request
export function update(req, res) {
    const id_olog = req.params.id_olog;

    Olog.update(req.body, {
        where: { id_olog: id_olog }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tutorial was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Tutorial with id=${id_olog}. Maybe Tutorial was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Tutorial with id=" + id_olog
            });
        });
}

// Delete a Tutorial with the specified id in the request
const _delete = (req, res) => {
    const id_olog = req.params.id_olog;

    Tutorial.destroy({
        where: { id_olog: id_olog }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tutorial was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Tutorial with id_olog=${id_olog}. Maybe Tutorial was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Tutorial with id_olog=" + id_olog
            });
        });
};

export { _delete as delete };