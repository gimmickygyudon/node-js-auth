import { db_sim } from "../config/db.config.js";
import { Sequelize } from "sequelize";
import { sim_OITM_MODEL } from "./sim.oitm.model.js";
const { DataTypes } = Sequelize;

export const sim_BRN1_MODEL = db_sim.define(
    "BRN1",
    {
        id_brn1: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        description: {
            type: DataTypes.STRING,
        },
        brn_group: {
            type: DataTypes.STRING,
        }
    },
    {
        tableName: "BRN1",
        freezeTableName: true,
        timestamps: false,
        schema: 'sim'
    }
);

sim_BRN1_MODEL.hasMany(sim_OITM_MODEL, {foreignKey: 'id_brn1', sourceKey: 'id_brn1'});
sim_OITM_MODEL.belongsTo(sim_BRN1_MODEL, {foreignKey: 'id_brn1'});