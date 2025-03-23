'use strict';
const os = require("os");
const logger = require('../utils/logger');

exports.get = function (req, res) {
    logger.info('Petición Dummy Exitosa');
    res.send({
        message: "Hola mundo",
        machine: os.hostname(),
        date: new Date()
    })
};
