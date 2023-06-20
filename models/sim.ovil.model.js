import db_sim from "../config/sim.db.config.js";
import { Sequelize } from "sequelize";
const { DataTypes } = Sequelize;

const sim_OVIL_MODEL = db_sim.define(
    "OVIL",
    {
        id_ovil: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        id_osdt: {
            type: DataTypes.STRING,
        },
        village_code: {
            type: DataTypes.INTEGER,
        },
        village_name: {
            type: DataTypes.STRING,
        },
        postal_code: {
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

export default sim_OVIL_MODEL;