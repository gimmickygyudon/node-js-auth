import db_sim from "../config/sim.db.config.js";
import { Sequelize } from "sequelize";
const { DataTypes } = Sequelize;

const sim_OPRV_MODEL = db_sim.define(
    "OPRV",
    {
        id_oprv: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        province_code: {
            type: DataTypes.STRING,
        },
        province_name: {
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

export default sim_OPRV_MODEL;