"use strict";

module.exports = function(sequelize, dataTypes) {

	return sequelize.define("workshopCycleTeacher", {
		"id": {
			"type": dataTypes.INTEGER.UNSIGNED,
			"autoIncrement": true,
			"primaryKey": true
		},
		"workshop_cycle_id": {
			"type": dataTypes.INTEGER.UNSIGNED
		},
		"teacher_id": {
			"type": dataTypes.INTEGER.UNSIGNED
		},
		"start_date": {
			"type": dataTypes.DATEONLY
		},
		"end_date": {
			"type": dataTypes.DATEONLY
		},
		"description": {
			"type": dataTypes.TEXT
		}
	}, {
		"indexes": [
			{
				"name": "workshop_cycle_ux",
				"fields": ["workshop_cycle_id", "teacher_id"],
				"unique": true
			}
		]
	});
};
