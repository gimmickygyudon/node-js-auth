import db_sim2 from "../config/sim2.db.config.js";
import { Sequelize } from "sequelize";
import { sim_OITM_MODEL } from "./sim.oitm.model.js";
const { DataTypes } = Sequelize;

export const sim2_VODOR_MODEL = db_sim2.define(
    "VODOR",
    {
        parent_code: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        tonage: {
            type: DataTypes.DOUBLE,
        },
        surat_jalan_date: {
            type: DataTypes.INTEGER,
        },
        id_oitm: {
            type: DataTypes.STRING,
        },
    },
    {
        tableName: "VODOR",
        freezeTableName: true,
        timestamps: false,
    }
);


sim2_VODOR_MODEL.hasOne(sim_OITM_MODEL, {foreignKey: 'id_oitm', sourceKey: 'id_oitm'});
sim_OITM_MODEL.belongsTo(sim2_VODOR_MODEL, {foreignKey: 'id_oitm'});