const Sequelize = require("sequelize");
const sequelize = require("../db").sequelize;

const Companies = sequelize.define(
  "companies",
  {
    company_name: {
      type: Sequelize.TEXT,
    }
  },
  {
    timestamps: false,
    freezeTableName: true
  }
);

module.exports = Companies;
