import { Sequelize } from "sequelize";

const db_local = new Sequelize("indostar", "root", "", {
    host: "localhost",
    dialect: "mysql",
    timezone: "+07:00",
})

const db = new Sequelize("mis", "mysql_client", "1BMclient!", {
    host: "192.168.1.8",
    dialect: "mysql",
    timezone: "+07:00",
    dialectOptions: {
      dateStrings: true,
      typeCast: function (field, next) { // for reading from database
        if (field.type === 'DATETIME') {
          return field.string()
        }
          return next()
        },
    },
});

export default db;