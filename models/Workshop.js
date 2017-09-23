"use strict";

module.exports = function(sequelize, dataTypes) {

	return sequelize.define("workshop", {
		"id": {
			"type": dataTypes.INTEGER.UNSIGNED,
			"autoIncrement": true,
			"primaryKey": true
		},
		"workshop_type_id": {
			"type": dataTypes.INTEGER.UNSIGNED
		},
		"name": {
			"type": dataTypes.STRING
		},
		"duration_hours": {
			"type": dataTypes.INTEGER(4).UNSIGNED
		},
		"max_students": {
			"type": dataTypes.INTEGER(4).UNSIGNED
		},
		"min_students": {
			"type": dataTypes.INTEGER(4).UNSIGNED
		},
		"active": {
			"type": dataTypes.INTEGER(1).UNSIGNED,
			"defaultValue": 1
		},
		"position": {
			"type": dataTypes.INTEGER(4).UNSIGNED
		}
	}, {
		"indexes": [
			{
				"name": "workshop_type_ix",
				"fields": ["workshop_type_id"]
			}
		]
	});

};
