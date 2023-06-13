import { db_sim } from "../config/db.config.js";
import { Sequelize } from "sequelize";
import sim_OITM_MODEL from "./sim.oitm.model.js";
const { DataTypes } = Sequelize;

const sim_BRN1_MODEL = db_sim.define(
    "BRN1",
    {
        id_brn1: {
            type: DataTypes.INTEGER,
            primaryKey: true,
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

sim_BRN1_MODEL.hasMany(sim_OITM_MODEL, {foreignKey: 'id_brn1', sourceKey: 'id_brn1'});
sim_OITM_MODEL.belongsTo(sim_BRN1_MODEL, {foreignKey: 'id_brn1'});

export default sim_BRN1_MODEL;