"use strict";

module.exports = function(sequelize, dataTypes) {

	return sequelize.define("workshopType", {
		"id": {
			"type": dataTypes.INTEGER.UNSIGNED,
			"autoIncrement": true,
			"primaryKey": true
		},
		"workshop_group_id": {
			"type": dataTypes.INTEGER.UNSIGNED
		},
		"name": {
			"type": dataTypes.STRING
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
				"name": "workshop_group_ix",
				"fields": ["workshop_group_id"]
			}
		]
	});
};
