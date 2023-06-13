import db_sim from "../config/sim.db.config.js";
import { Sequelize } from "sequelize";
const { DataTypes } = Sequelize;

const sim_OITM_MODEL = db_sim.define(
    "OITM",
    {
        id_oitm: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        id_oitt: {
            type: DataTypes.INTEGER,
        },
        id_brn1: {
            type: DataTypes.STRING,
        },
        item_description: {
            type: DataTypes.STRING,
        },
        spesification: {
            type: DataTypes.STRING,
        },
        weight: {
            type: DataTypes.DOUBLE
        }
    },
    {
        freezeTableName: true,
        timestamps: false,
    }
);

export default sim_OITM_MODEL;