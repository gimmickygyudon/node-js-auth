import db_sim from "../config/sim.db.config.js";
import { Sequelize } from "sequelize";
const { DataTypes } = Sequelize;

const sim_OCTY_MODEL = db_sim.define(
    "OCTY",
    {
        id_octy: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        id_oprv: {
            type: DataTypes.INTEGER,
        },
        city_code: {
            type: DataTypes.STRING,
        },
        city_name: {
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

export default sim_OCTY_MODEL;