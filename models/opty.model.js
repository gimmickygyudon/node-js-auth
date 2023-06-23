import { Sequelize } from "sequelize";
import db from "../config/db.config.js";
const { DataTypes } = Sequelize;

const simOPTY = db.define(
    "OPTY",
    {
        id_opty: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        description: {
            type: DataTypes.STRING,
        },
        is_active: {
            type: DataTypes.STRING,
        },
    },
    {
        freezeTableName: true,
        timestamps: false,
    }
);

export default simOPTY;