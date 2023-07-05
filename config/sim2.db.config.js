import { Sequelize } from "sequelize";

export const db_sim2 = new Sequelize("sim2", "mysql_client", "1BMclient!", {
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


export default db_sim2;