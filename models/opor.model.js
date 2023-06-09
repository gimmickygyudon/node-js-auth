import { Sequelize } from "sequelize";
import db from "../config/db.config.js";
import simUSR1 from "./usr1.model.js";
import simPOR1 from "./por1.model.js";
const { DataTypes } = Sequelize;

const simOPOR = db.define(
    "OPOR",
    {
        id_opor: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        purchase_order_code: {
            type: DataTypes.STRING,
        },
        customer_reference_number: {
            type: DataTypes.STRING,
        },
        id_ousr: {
            type: DataTypes.STRING,
        },
        id_usr1: {
            type: DataTypes.STRING,
        },
        posting_date: {
            type: DataTypes.DATE(6),
            defaultValue: DataTypes.NOW,
        },
        document_date: {
            type: DataTypes.DATE,
            defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        delivery_type: {
            type: DataTypes.STRING,
        },
        delivery_date: {
            type: DataTypes.STRING,
        },
        document_remarks: {
            type: DataTypes.STRING,
        },
        source: {
            type: DataTypes.STRING,
            defaultValue: "IBM MOBILE",
        },
        printed: {
            type: DataTypes.STRING,
            defaultValue: "0",
        },
        document_status: {
            type: DataTypes.STRING,
            defaultValue: "OPEN",
        },
        status_remarks: {
            type: DataTypes.STRING,
            defaultValue: "NULL"
        },
        payment_type: {
            type: DataTypes.STRING,
        }
    },
    {
        freezeTableName: true,
        timestamps: false,
    }
);


simOPOR.hasOne(simUSR1, {foreignKey: 'id_usr1', sourceKey: 'id_usr1'});
simUSR1.belongsTo(simOPOR, {foreignKey: 'id_usr1'});

simOPOR.hasMany(simPOR1, {foreignKey: 'id_opor', sourceKey: 'id_opor'});
simPOR1.belongsTo(simOPOR, {foreignKey: 'id_opor'});

export default simOPOR;