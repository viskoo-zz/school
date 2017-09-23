"use strict";

module.exports = function(sequelize, dataTypes) {

	return sequelize.define("workshopCycleDaily", {
		"id": {
			"type": dataTypes.INTEGER.UNSIGNED,
			"autoIncrement": true,
			"primaryKey": true
		},
		"workshop_cycle_id": {
			"type": dataTypes.INTEGER.UNSIGNED
		},
		"cycle_date": {
			"type": dataTypes.DATEONLY
		},
		"start_time": {
			"type": dataTypes.TIME
		},
		"end_time": {
			"type": dataTypes.TIME
		},
	}, {
		"indexes": [
			{
				"name": "workshop_cycle_id_ix",
				"fields": ["workshop_cycle_id"]
			}
		]
	});
};
