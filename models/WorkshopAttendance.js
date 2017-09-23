"use strict";

module.exports = function(sequelize, dataTypes) {

	return sequelize.define("workshopAttendance", {
		"id": {
			"type": dataTypes.INTEGER.UNSIGNED,
			"autoIncrement": true,
			"primaryKey": true
		},
		"workshop_cycle_daily_id": {
			"type": dataTypes.INTEGER.UNSIGNED,
			"unique": "compositeIndex"
		},
		"student_id": {
			"type": dataTypes.INTEGER.UNSIGNED,
			"unique": "compositeIndex"
		},
		"attendance": {
			"type": dataTypes.INTEGER(1).UNSIGNED
		},
		"comment": {
			"type": dataTypes.TEXT
		}
	}, {
	});
};
