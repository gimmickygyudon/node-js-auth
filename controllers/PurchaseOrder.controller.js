import db from "../config/db.config.js";
import USR1_Model from "../models/usr1.model.js";
import OPOR_Model from "../models/opor.model.js";
import POR1_Model from "../models/por1.model.js";
const Op = db.Sequelize.Op;

function isEmptyObject(obj) {
    for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            return false;
        }
    }
    return true;
}

function romanize (num) {
    if (isNaN(num))
        return NaN;
    var digits = String(+num).split(""),
        key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
               "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
               "","I","II","III","IV","V","VI","VII","VIII","IX"],
        roman = "",
        i = 3;
    while (i--)
        roman = (key[+digits.pop() + (i * 10)] || "") + roman;
    return Array(+digits.join("") + 1).join("M") + roman;
}

function running (string) {
  if (isNaN(string))
      return NaN;

  var code = string;
  for (let i = 0; i < 4 - string.length; i++) {
    code = 0 + code;
  }

  return code;
}

export const PurchaseOrder_insert = async (req, res) => {

    const usr1 = {
        id_usr1: req.body.id_usr1,
        id_ousr: req.body.id_ousr,
        delivery_name: req.body.delivery_name,
        delivery_street: req.body.delivery_street,
        id_oprv: req.body.id_oprv,
        id_octy: req.body.id_octy,
        id_osdt: req.body.id_osdt,
        id_ovil: req.body.id_ovil,
        phone_number: req.body.phone_number,
    };

    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    USR1_Model.create(usr1)
        .then(data => {
            var currentTime = new Date()
            var order_code = running(data.id_usr1.toString()) + '/' + romanize(currentTime.getMonth()) + '/' + currentTime.getFullYear().toString().substring(2, 4)
            const opor = {
                id_opor: req.body.id_opor,
                purchase_order_code: order_code,
                customer_reference_number: req.body.customer_reference_number,
                id_ousr: req.body.id_ousr,
                id_usr1: data.id_usr1.toString(),
                delivery_date: req.body.delivery_date,
                delivery_type: req.body.delivery_type,
                document_remarks: req.body.document_remarks,
                payment_type: req.body.payment_type,
            }
            OPOR_Model.create(opor)
            .then(data => {
                const por1 = []
                let i = 0
                for (const oitm of req.body.por1) {
                    por1[i] = {
                        id_por1: null,
                        id_opor: data.id_opor.toString(),
                        id_oitm: req.body.por1[i]['id_oitm'],
                        order_qty: parseInt(oitm.count),
                    }
                    i++
                }
                POR1_Model.bulkCreate(por1)
            })
            .catch(err => {
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while creating the Tutorial."
                });
            });
        res.status(201).send(data)
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Tutorial."
            });
        });
}

export const PurchaseOrder_retrieveAll = async (req, res) => {
    OPOR_Model.findAll({
        order: [['document_date', 'DESC']],
        include: [
            { model: USR1_Model },
            { model: POR1_Model }
        ]
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