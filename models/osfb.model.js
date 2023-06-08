import { Sequelize } from "sequelize";
import db from "../config/db.config.js";
import simSFB1 from "./sfb1.model.js";
import simSFB2 from "./sfb2.model.js";
const { DataTypes } = Sequelize;

const simOSFB = db.define(
    "OSFB",
    {
        id_osfb: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        document_date: {
            type: DataTypes.STRING,
        },
        id_ousr: {
            type: DataTypes.STRING,
        },
        remarks: {
            type: DataTypes.STRING,
        },
        is_active: {
            type: DataTypes.STRING
        }
    },
    {
        freezeTableName: true,
        timestamps: false,
    }
);

simOSFB.hasOne(simSFB1, {foreignKey: 'id_osfb', sourceKey: 'id_osfb'});
// simOSFB.hasOne(simSFB2, {foreignKey: 'id_osfb', sourceKey: 'id_osfb'});

simSFB1.hasMany(simSFB2, {foreignKey: 'id_osfb', sourceKey: 'id_osfb'});
simSFB1.belongsTo(simOSFB, {foreignKey: 'id_osfb'});

export default simOSFB;