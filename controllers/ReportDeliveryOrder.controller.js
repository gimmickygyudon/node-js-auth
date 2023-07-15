import db_sim2 from "../config/sim2.db.config.js";
import { sim2_VODOR_MODEL } from "../models/sim2.vodor.model.js";
import { sim2_VOTSR_MODEL } from "../models/sim2.votsr.model.js";
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

export const reportDeliveryOrder_retrieve = async (req, res) => {
    const id_ocst = req.query.id_ocst;
    const surat_jalan_date = req.query.surat_jalan_date;
    const from_date = req.query.from_date;
    const to_date = req.query.to_date;

    var condition

    if (id_ocst && from_date == null && to_date == null) {
        condition = {
            parent_code: id_ocst,
            surat_jalan_date: {
                [Op.like]: `%${surat_jalan_date}%`
            }
        }
    } else if (id_ocst && from_date && to_date ) {
        condition = {
            parent_code: id_ocst,
            surat_jalan_date: {
                [Op.between]: [from_date, to_date],
            }
        }
    } else {
        condition = null
    }

    sim2_VODOR_MODEL.findAll({
        where: condition,
        attributes: [
            [sequelize.fn('count', sequelize.col('tonage')), 'count'],
            [sequelize.fn('sum', sequelize.col('tonage')), 'realisasi'],
        ],
        distinct: true,
    })
    .then(data => {
        if (!isEmptyObject(data)) {
            const realisasi = (data[0].dataValues.realisasi / 1000).toFixed(2)
            const realisasi_count = data[0].dataValues.count
            sim2_VOTSR_MODEL.findAll({
                where: { parent_code: id_ocst },
                attributes: [
                    [sequelize.fn('count', sequelize.col('tonage')), 'count'],
                    [sequelize.fn('sum', sequelize.col('tonage')), 'outstanding'],
                ],
                distinct: true,
            })
            .then(data => {
                const outstanding = (data[0].dataValues.outstanding / 1000).toFixed(2)
                const outstanding_count = data[0].dataValues.count
                res.status(200).send(
                    [{
                        'realisasi': realisasi,
                        'realisasi_count': realisasi_count,
                        'outstanding': outstanding,
                        'outstanding_count': outstanding_count
                    }]
                );
            })
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