import { Sequelize } from "sequelize";
import db from "../config/db.config.js";
const { DataTypes } = Sequelize;

const simOSFB = db.define(
    "OSFB",
    {
        id_osfb: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        document_date: {
            type: DataTypes.STRING,
        },
        id_ousr: {
            type: DataTypes.STRING,
        },
        remarks: {
            type: DataTypes.STRING,
        },
    },
    {
        freezeTableName: true,
        timestamps: false,
    }
);

export default simOSFB;