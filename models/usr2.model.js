import { Sequelize } from "sequelize";
import db from "../config/db.config.js";
const { DataTypes } = Sequelize;

const simUSR2 = db.define(
    "USR2",
    {
        id_usr2: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        id_ousr: {
            type: DataTypes.STRING,
        },
        remarks: {
            type: DataTypes.STRING,
        },
        id_ocst: {
            type: DataTypes.STRING,
        },
        is_active: {
            type: DataTypes.INTEGER,
            defaultValue: 1,
        },
    },
    {
        freezeTableName: true,
        timestamps: false,
    }
);

export default simUSR2;