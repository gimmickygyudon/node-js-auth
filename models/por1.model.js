import { Sequelize } from "sequelize";
import db from "../config/db.config.js";
const { DataTypes } = Sequelize;

const simPOR1 = db.define(
    "POR1",
    {
        id_por1: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        id_opor: {
            type: DataTypes.STRING,
        },
        id_oitm: {
            type: DataTypes.STRING,
        },
        order_qty: {
            type: DataTypes.INTEGER,
        },
        delivery_qty: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        item_status: {
            type: DataTypes.STRING,
            defaultValue: 'OPEN',
        },
        item_remarks: {
            type: DataTypes.STRING,
            defaultValue: null,
        },
    },
    {
        freezeTableName: true,
        timestamps: false,
    }
);

export default simPOR1;