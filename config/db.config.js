import { Sequelize } from "sequelize";

const db = new Sequelize("indostar", "mysql_user", "1BM123", {
    host: "192.168.1.16",
    dialect: "mysql",
    timezone: "+07:00",
});

export default db;