import { db_sim_report } from "../config/sim_report.db.config.js";
import { sim_report_VOAAR_MODEL } from "../models/sim_report.voaar.model.js";
const Op = db_sim_report.Sequelize.Op;
const sequelize = db_sim_report.Sequelize;

function isEmptyObject(obj) {
    for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            return false;
        }
    }
    return true;
}

export const reportBalanceDue_retrieve = async (req, res) => {
    const id_ocst = req.query.id_ocst;

    var condition

    if (id_ocst) {
        condition = {
            parent_code: id_ocst,
        }
    } else {
        condition = null
    }

    sim_report_VOAAR_MODEL.findAll({
        where: condition,
        attributes: [
            // [sequelize.fn('count', sequelize.col('balance_due')), 'count'],
            // [sequelize.fn('sum', sequelize.col('balance_due')), 'total_balance_due'],
            'balance_due',
            'umur_piutang'
        ],
        distinct: true,
    })
    .then(data => {
        if (!isEmptyObject(data)) {
            var total_balance = 0
            var total_balance_due = 0
            var count = 0

            data.forEach(function (item) {
                total_balance += Number(item.dataValues.balance_due)

                if (item.dataValues.umur_piutang >= 0) {
                    total_balance_due += Number(item.dataValues.balance_due)
                }

                console.log(total_balance)
                count++;
            })

            res.status(200).send([
                {
                    'total_balance': total_balance,
                    'total_balance_due': total_balance_due,
                    'count': count
                }
            ]);
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