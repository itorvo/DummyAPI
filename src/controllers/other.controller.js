'use strict';

exports.get = function (req, res) {
    var request = require('request');
    let hostname = process.env.PORT == 80 ? 'other' : 'dummy'
    let port = process.env.PORT == 80 ? '81' : '80'
    var options = {
        'method': 'GET',
        'url': 'http://' + hostname + '.ito' + ':' + port + '/api/dummy',
        'headers': {
        }
    };
    request(options, function (error, response) {
        if (error) throw new Error(error);
        res.send(JSON.parse(response.body))
    });
};
