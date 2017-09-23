"use strict";
const Sequelize = require("sequelize");

const sequelize = new Sequelize("school", "", "", {"host": "", "dialect": "mysql"});

const Workshop = require("./Workshop")(sequelize, Sequelize);
const WorkshopType = require("./WorkshopType")(sequelize, Sequelize);
const WorkshopGroup = require("./WorkshopGroup")(sequelize, Sequelize);
const Student = require("./Student")(sequelize, Sequelize);
const Teacher = require("./Teacher")(sequelize, Sequelize);
const Mentor = require("./Mentor")(sequelize, Sequelize);

module.exports = {
	"sequelize": sequelize
};

