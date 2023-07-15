import { Sequelize } from "sequelize";

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

db_sim.dialect.supports.schemas = true;

export default db_sim;