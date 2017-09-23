"use strict";
const Sequelize = require("sequelize");

const sequelize = new Sequelize("school", "root", "root", {"host": "localhost", "dialect": "mysql"});

const Student = require("./Student")(sequelize, Sequelize);
const Teacher = require("./Teacher")(sequelize, Sequelize);
const Mentor = require("./Mentor")(sequelize, Sequelize);

const Workshop = require("./Workshop")(sequelize, Sequelize);
const WorkshopType = require("./WorkshopType")(sequelize, Sequelize);
const WorkshopGroup = require("./WorkshopGroup")(sequelize, Sequelize);
const WorkshopCycle = require("./WorkshopCycle")(sequelize, Sequelize);
const WorkshopCycleDaily = require("./WorkshopCycleDaily")(sequelize, Sequelize);
const WorkshopCycleTeacher = require("./WorkshopCycleTeacher")(sequelize, Sequelize);
const WorkshopCycleAttendance = require("./WorkshopCycleAttendance")(sequelize, Sequelize);


module.exports = {
	"sequelize": sequelize,
	"student": Student
};

