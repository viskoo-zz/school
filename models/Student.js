"use strict";

module.exports = function(sequelize, dataTypes) {

	return sequelize.define("student", {
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
		"birth_date": {
			"type": dataTypes.DATEONLY
		},
		"work_status": {
			"type": dataTypes.STRING(256)
		},
		"country": {
			"type": dataTypes.STRING(128)
		},
		"city": {
			"type": dataTypes.STRING(128)
		},
		"education": {
			"type": dataTypes.STRING(512)
		},
		"picture": {
			"type": dataTypes.STRING(256)
		},
		"cv": {
			"type": dataTypes.STRING(256)
		},
		"active": {
			"type": dataTypes.INTEGER(1).UNSIGNED
		}
	}, {

	});
};
