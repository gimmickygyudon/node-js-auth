import db from "../config/db.config.js";
import OLOG_Model from "../models/olog.model.js";
const Op = db.Sequelize.Op;

function isEmptyObject(obj) {
    for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            return false;
        }
    }
    return true;
}

export const OLOG_create = async (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    const olog = {
        id_olog: req.body.id_olog,
        date_time: req.body.date_time,
        form_sender: req.body.form_sender,
        remarks: req.body.remarks,
        source: req.body.source,
    };

    OLOG_Model.create(req.body)
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

export const OLOG_find_source = async (req, res) => {
    const source = req.query.source;
    // var condition = source ? { source: { [Op.like]: `%${source}%` } } : null;
    var condition = source ? { source: source } : null;

    OLOG_Model.findAll({ where: condition })
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

//  export function update(req, res) {
//      const id_olog = req.params.id_olog;

//      db.update(req.body, {
//          where: { id_olog: id_olog }
//      })
//          .then(num => {
//              if (num == 1) {
//                  res.send({
//                      message: "Tutorial was updated successfully."
//                  });
//              } else {
//                  res.send({
//                      message: `Cannot update Tutorial with id=${id_olog}. Maybe Tutorial was not found or req.body is empty!`
//                  });
//              }
//          })
//          .catch(err => {
//              res.status(500).send({
//                  message: "Error updating Tutorial with id=" + id_olog
//              });
//          });
//  }

//  // Delete a Tutorial with the specified id in the request
//  const _delete = (req, res) => {
//      const id_olog = req.params.id_olog;

//      Tutorial.destroy({
//          where: { id_olog: id_olog }
//      })
//          .then(num => {
//              if (num == 1) {
//                  res.send({
//                      message: "Tutorial was deleted successfully!"
//                  });
//              } else {
//                  res.send({
//                      message: `Cannot delete Tutorial with id_olog=${id_olog}. Maybe Tutorial was not found!`
//                  });
//              }
//          })
//          .catch(err => {
//              res.status(500).send({
//                  message: "Could not delete Tutorial with id_olog=" + id_olog
//              });
//          });
//  };

//  export { _delete as delete };
