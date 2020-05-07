const Sequelize = require("sequelize");
const sequelize = require("../db").sequelize;

const Users = sequelize.define(
  "contacts",
  {
    first_name: {
      type: Sequelize.TEXT,
    },
    last_name: {
      type: Sequelize.TEXT,
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
