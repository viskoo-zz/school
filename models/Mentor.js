"use strict";

module.exports = function(sequelize, dataTypes) {

	return sequelize.define("mentor", {
		"id": {
			"type": dataTypes.INTEGER.UNSIGNED,
			"autoIncrement": true,
			"primaryKey": true
		},
		"name": {
			"type": dataTypes.STRING(128)
		},
		"surname": {
			"type": dataTypes.STRING(128)
		},
		"email": {
			"type": dataTypes.STRING(128)
		},
		"phone": {
			"type": dataTypes.STRING(128)
		},
		"work_status": {
			"type": dataTypes.STRING(256)
		},
		"education": {
			"type": dataTypes.STRING(512)
		},
		"picture": {
			"type": dataTypes.STRING(256)
		},
		"active": {
			"type": dataTypes.INTEGER(1).UNSIGNED
		}
	}, {

	});
};
