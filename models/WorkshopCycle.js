"use strict";

module.exports = function(sequelize, dataTypes) {

	return sequelize.define("workshopCycle", {
		"id": {
			"type": dataTypes.INTEGER.UNSIGNED,
			"autoIncrement": true,
			"primaryKey": true
		},
		"workshop_id": {
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
				"name": "workshop_id_ix",
				"fields": ["workshop_id"]
			}
		]
	});
};
