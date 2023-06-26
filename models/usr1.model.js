import { Sequelize } from "sequelize";
import db from "../config/db.config.js";
const { DataTypes } = Sequelize;

const simUSR1 = db.define(
    "USR1",
    {
        id_usr1: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        id_ousr: {
            type: DataTypes.STRING,
        },
        delivery_name: {
            type: DataTypes.STRING,
        },
        delivery_street: {
            type: DataTypes.STRING,
        },
        id_oprv: {
            type: DataTypes.STRING,
        },
        id_octy: {
            type: DataTypes.STRING,
        },
        id_osdt: {
            type: DataTypes.STRING,
        },
        id_ovil: {
            type: DataTypes.STRING,
        },
        phone_number: {
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

export default simUSR1;