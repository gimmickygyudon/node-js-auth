import db_sim2 from "../config/sim2.db.config.js";
import { sim_report_VOPRS_MODEL } from "../models/sim_report.voprs.model.js";
const Op = db_sim2.Sequelize.Op;
const sequelize = db_sim2.Sequelize;

function isEmptyObject(obj) {
    for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            return false;
        }
    }
    return true;
}

export const reportPaymentDue_retrieve = async (req, res) => {
    const id_ocst = req.query.id_ocst;
    const from_date = req.query.from_date;
    const to_date = req.query.to_date;

    var condition

    if (id_ocst && !from_date && !to_date ) {
        condition = { parent_code: id_ocst };
    } else if (id_ocst && from_date && to_date ) {
        condition = {
            parent_code: id_ocst,
            payment_date: {
                [Op.between]: [from_date, to_date],
            }
        }
    } else {
        condition = null
    }

    sim_report_VOPRS_MODEL.findAll({
        where: condition,
        distinct: true,
    })
    .then(data => {
        if (!isEmptyObject(data)) {
            var total = 0
            var count = 0

            data.forEach(function (item) {
                total += Number(item.dataValues.total_payment)
                count++;
            })

            res.status(200).send(
                [{
                    'total': total,
                    'count': count,
                    'data': data
                }]
            );
        } else {
            res.status(404).send({
                message: `Cannot find id_ocst with id_ocst=${id_ocst}.`
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