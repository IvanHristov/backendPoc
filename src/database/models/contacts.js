const Sequelize = require("sequelize");
const sequelize = require("../db").sequelize;

const Users = sequelize.define(
  "contacts",
  {
    firstName: {
      type: Sequelize.TEXT,
      field: 'first_name',
    },
    lastName: {
      type: Sequelize.TEXT,
      field: 'last_name',
    },
    email: {
      type: Sequelize.TEXT,
    }
  },
  {
    timestamps: false,
    freezeTableName: true
  }
);

module.exports = Users;
