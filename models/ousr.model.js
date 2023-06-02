import { Sequelize } from "sequelize";
import db from "../config/db.config.js";
const { DataTypes } = Sequelize;

const simOUSR = db.define(
    "ousr",
    {
        id_ousr: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        login_type: {
            type: DataTypes.STRING,
        },
        user_email: {
            type: DataTypes.STRING,
        },
        user_name: {
            type: DataTypes.STRING,
        },
        phone_number: {
            type: DataTypes.STRING,
        },
        user_password: {
            type: DataTypes.STRING,
        },
    },
    {
        freezeTableName: true,
        timestamps: false,
    }
);

export default simOUSR