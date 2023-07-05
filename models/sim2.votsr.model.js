import db_sim2 from "../config/sim2.db.config.js";
import { Sequelize } from "sequelize";
const { DataTypes } = Sequelize;

export const sim2_VOTSR_MODEL = db_sim2.define(
    "VOTSR",
    {
        parent_code: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        tonage: {
            type: DataTypes.DOUBLE,
        },
    },
    {
        freezeTableName: true,
        timestamps: false,
    }
);