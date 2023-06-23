import { Sequelize } from "sequelize";
import db from "../config/db.config.js";
const { DataTypes } = Sequelize;

const simPOR2 = db.define(
    "POR2",
    {
        id_por2: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        id_opor: {
            type: DataTypes.STRING,
        },
        id_odct: {
            type: DataTypes.STRING,
        },
    },
    {
        freezeTableName: true,
        timestamps: false,
    }
);

export default simPOR2;