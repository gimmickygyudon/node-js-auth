import db_sim2 from "../config/sim2.db.config.js";
import { sim2_VOTSR_MODEL } from "../models/sim2.votsr.model.js";
import { Sequelize } from "sequelize";
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
    },
    {
        freezeTableName: true,
        timestamps: false,
    }
);