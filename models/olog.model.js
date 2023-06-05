import { Sequelize } from "sequelize";
import db from "../config/db.config.js";
const { DataTypes } = Sequelize;

const simOLOG = db.define(
    "OLOG",
    {
        id_olog: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        date_time: {
            type: DataTypes.STRING,
        },
        form_sender: {
            type: DataTypes.STRING,
        },
        remarks: {
            type: DataTypes.STRING,
        },
        source: {
            type: DataTypes.STRING,
        },
    },
    {
        freezeTableName: true,
        timestamps: false,
    }
);

export default simOLOG;