'use strict';

exports.get = function (req, res) {
    var request = require('request');
    let host = process.env.OTHER
    var options = {
        'method': 'GET',
        'url': `http://${host}/api/dummy`,
        'headers': {
        }
    };
    request(options, function (error, response) {
        if (error) throw new Error(error);
        res.send(JSON.parse(response.body))
    });
};
