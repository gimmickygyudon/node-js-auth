import { Sequelize } from "sequelize";
import db from "../config/db.config.js";
const { DataTypes } = Sequelize;

const simSFB1 = db.define(
    "SFB1",
    {
        id_sfb1: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        id_osfb: {
            type: DataTypes.STRING,
        },
        type_feed: {
            type: DataTypes.STRING,
        },
        description: {
            type: DataTypes.STRING,
        },
    },
    {
        freezeTableName: true,
        timestamps: false,
    }
);

export default simSFB1;