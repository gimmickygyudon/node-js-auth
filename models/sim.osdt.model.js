import db_sim from "../config/sim.db.config.js";
import { Sequelize } from "sequelize";
const { DataTypes } = Sequelize;

const sim_OSDT_MODEL = db_sim.define(
    "OSDT",
    {
        id_osdt: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        id_octy: {
            type: DataTypes.STRING,
        },
        sub_district_code: {
            type: DataTypes.STRING,
        },
        sub_district_name: {
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

export default sim_OSDT_MODEL;