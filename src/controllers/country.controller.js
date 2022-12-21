'use strict';
const dynamoClient = require('../persistence/dynamoClient')
const tableName = process.env.TableName

exports.getAll = async function (req, res) {
    try {
        const countries = await dynamoClient.getAll(tableName);
        res.status(200).json(countries);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

exports.get = async function (req, res) {
    res.status(404).json({ message: error.message });
};

exports.save = async function (req, res) {
    res.status(404).json({ message: error.message });
};

exports.update = async function (req, res) {
    res.status(404).json({ message: error.message });
};

exports.delete = async function (req, res) {
    try {
        const result = await dynamoClient.delete(tableName, req.params.id);
        if (result) {
            res.status(200).json(countries);
        }
        else {
            throw new Error('No ha sido posible eliminar')
        }
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};