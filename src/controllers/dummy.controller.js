'use strict';
var os = require("os");


exports.get = function (req, res) {
    res.send({
        message: "Hola mundo",
        machine: os.hostname(),
        date: new Date()
    })
};
