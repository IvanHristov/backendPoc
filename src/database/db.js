const Sequelize = require("sequelize");
// const sequelize = new Sequelize(
//   "backend_test", // dev db name
//   "postgres", // dev username
//   "postgrestest", // dev password
//   {
//     dialect: "postgres",
//     host: "18.184.132.169:5430", // dev host
//     // operatorsAliases: false,
//     pool: {
//       max: 5,
//       min: 0,
//       require: 30000,
//       idle: 10000,
//     },
//   }
// );
const sequelize = new Sequelize('postgres://postgres:postgrestest@18.184.132.169:5430/backend_test')
const Op = Sequelize.Op;
module.exports = {
  sequelize,
  Op,
};
