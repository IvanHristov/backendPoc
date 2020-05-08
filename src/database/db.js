const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  process.env.DB_NAME, // dev db name
  process.env.DB_USER, // dev username
  process.env.DB_PASS, // dev password
  {
    dialect: "postgres",
    host: process.env.DB_HOST, // dev host
    port: process.env.DB_PORT, // port
    // operatorsAliases: false,
    pool: {
      max: 5,
      min: 0,
      require: 30000,
      idle: 10000,
    },
  }
);
// const sequelize = new Sequelize('postgres://postgres:postgrestest@18.184.132.169:5430/backend_test')
const Op = Sequelize.Op;
module.exports = {
  sequelize,
  Op,
};
