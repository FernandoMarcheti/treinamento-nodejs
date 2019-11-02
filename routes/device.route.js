const express = require('express');
var HttpStatus = require('http-status-codes');
const Device = require('../models/device.model');

const route = express.Router();

route.get('/devices/:id', (req, res, next) => {
    res.send(Device.getById(req.params.id));
});

route.get('/devices', (req, res, next) => {
    res.send(Device.getAll());
});

route.post('/devices', (req, res, next) => {
    Device.create(req.body);
    res.sendStatus(HttpStatus.CREATED);
});

route.put('/devices/:id', (req, res, next) => {
    if(!Device.getById(req.params.id)) {
        res.sendStatus(HttpStatus.NOT_FOUND);
    } else {
        req.body.id = req.params.id;
        Device.update(req.body);
        res.sendStatus(HttpStatus.OK);
    }
});

route.delete('/devices/:id', (req, res, next) => {
    Device.delete(req.params.id);
    res.sendStatus(HttpStatus.OK);
});

module.exports = route;