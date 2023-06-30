import { Sequelize } from "sequelize";
import db from "../config/db.config.js";
const { DataTypes } = Sequelize;

const simYVID = db.define(
    "YVID",
    {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
        },
        duration: {
            type: DataTypes.STRING,
        },
        date: {
            type: DataTypes.STRING,
        },
    },
    {
        freezeTableName: true,
        timestamps: false,
    }
);

export default simYVID;