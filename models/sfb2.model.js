import { Sequelize } from "sequelize";
import db from "../config/db.config.js";
const { DataTypes } = Sequelize;

const simSFB2 = db.define(
    "SFB2",
    {
        id_sfb2: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        id_osfb: {
            type: DataTypes.STRING,
        },
        type: {
            type: DataTypes.STRING,
        },
        file_name: {
            type: DataTypes.STRING,
        },
        file_type: {
            type: DataTypes.STRING,
        },
        file_path: {
            type: DataTypes.STRING,
        }
    },
    {
        freezeTableName: true,
        timestamps: false,
    }
);

export default simSFB2;