import db_sim2 from "../config/sim2.db.config.js";
import { sim2_VODOR_MODEL } from "../models/sim2.odor.model.js";
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

export const reportDO_retrieve = async (req, res) => {
    const id_ocst = req.query.id_ocst;
    const surat_jalan_date = req.query.surat_jalan_date;

    var condition = id_ocst ? {
        parent_code: id_ocst,
        surat_jalan_date: {
            [Op.like]: `%${surat_jalan_date}%`
        }
    } : null;

    sim2_VODOR_MODEL.findAll({
        where: condition,
        attributes: [
            [sequelize.fn('sum', sequelize.col('tonage')), 'realisasi'],
        ],
    })
    .then(data => {
        if (!isEmptyObject(data)) {
            const realisasi = (data[0].dataValues.realisasi / 1000).toFixed(2)
            sim2_VOTSR_MODEL.findAll({
                where: { parent_code: id_ocst },
                attributes: [
                    [sequelize.fn('sum', sequelize.col('tonage')), 'outstanding'],
                ]
            })
            .then(data => {
                const outstanding = (data[0].dataValues.outstanding / 1000).toFixed(2)
                console.log(outstanding)
            })

            res.status(200).send(data);
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