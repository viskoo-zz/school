"use strict";

module.exports = function(sequelize, dataTypes) {

	return sequelize.define("workshopGroup", {
		"id": {
			"type": dataTypes.INTEGER.UNSIGNED,
			"autoIncrement": true,
			"primaryKey": true
		},
		"name": {
			"type": dataTypes.STRING
		},
		"active": {
			"type": dataTypes.INTEGER(1).UNSIGNED
		},
		"position": {
			"type": dataTypes.INTEGER(4).UNSIGNED
		}
	}, {

	});
};
