const Sequelize = require("sequelize");
const sequelize = require("../db").sequelize;

const Contacts = sequelize.define(
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
    },
    company_id: {
      type: Sequelize.BIGINT
    }
  },
  {
    timestamps: false,
    freezeTableName: true
  }
);

module.exports = Contacts;
