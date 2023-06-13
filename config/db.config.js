import { Sequelize } from "sequelize";

const db_local = new Sequelize("indostar", "root", "", {
    host: "localhost",
    dialect: "mysql",
    timezone: "+07:00",
})

export const db = new Sequelize("mis", "mysql_client", "1BMclient!", {
    host: "192.168.1.8",
    dialect: "mysql",
    timezone: "+07:00",
    dialectOptions: {
      dateStrings: true,
      typeCast: function (field, next) {
        if (field.type === 'DATETIME') {
          return field.string()
        }
          return next()
        },
    },
});

export const db_sim = new Sequelize("sim", "mysql_client", "1BMclient!", {
    host: "192.168.1.8",
    dialect: "mysql",
    timezone: "+07:00",
    dialectOptions: {
      dateStrings: true,
      typeCast: function (field, next) {
        if (field.type === 'DATETIME') {
          return field.string()
        }
          return next()
        },
    },
});

export default db;