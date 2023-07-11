import { db_sim_report } from "../config/sim_report.db.config.js";
import { Sequelize } from "sequelize";
const { DataTypes } = Sequelize;

export const sim_report_VOPRS_MODEL = db_sim_report.define(
    "VOPRS",
    {
        invoice_code: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        parent_code: {
            type: DataTypes.INTEGER,
        },
        payment_date: {
            type: DataTypes.DATE,
        },
        total_payment: {
            type: DataTypes.DOUBLE,
        },
    },
    {
        freezeTableName: true,
        timestamps: false,
    }
);