const express = require('express');
var HttpStatus = require('http-status-codes');
const Device = require('../models/device.model');

const route = express.Router();

route.get('/devices/:id', (req, res, next) => {
    Device.getById(req.params.id)
        .then(data => {
            res.send(data);
        });
});

route.get('/devices', (req, res, next) => {
    Device.getAll()
        .then(data => {
            res.send(data);
        });
});

route.post('/devices', (req, res, next) => {
    Device.create(req.body)
        .then(() => {
            res.sendStatus(HttpStatus.CREATED);
        });
});

route.put('/devices/:id', (req, res, next) => {
    req.body._id = req.params.id;
    Device.update(req.body)
        .then(() => {
            res.sendStatus(HttpStatus.OK);
        });
});

route.delete('/devices/:id', (req, res, next) => {
    Device.delete(req.params.id)
        .then(() => {
            res.sendStatus(HttpStatus.OK);
        });
});

module.exports = route;