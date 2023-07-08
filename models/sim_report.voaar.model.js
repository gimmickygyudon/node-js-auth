import { db_sim_report } from "../config/sim_report.db.config.js";
import { Sequelize } from "sequelize";
const { DataTypes } = Sequelize;

export const sim_report_VOAAR_MODEL = db_sim_report.define(
    "VOAAR",
    {
        parent_code: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        invoice_date: {
            type: DataTypes.DATE,
        },
        due_date: {
            type: DataTypes.DATE,
        },
        umur_piutang: {
            type: DataTypes.DOUBLE,
        },
        balance_due: {
            type: DataTypes.DOUBLE,
        },
    },
    {
        freezeTableName: true,
        timestamps: false,
    }
);