const mongoose = require('mongoose');
const deviceSchema = new mongoose.Schema({}, { strict : false } );
const DeviceModel = mongoose.model('Device', deviceSchema, 'devices');
const DeviceType = require('./device-type.enum');

class Device {

    constructor() {
        this.id = '';
        this.name = '';
        this.type = DeviceType.LAMP;
    }

    static create(device) {
        return DeviceModel.create(device);   
    }

    static getById(id) {
        return DeviceModel.findOne({
            _id: id
        });
    }

    static update(device) {
        return DeviceModel.update({ _id: device._id }, device);
    }

    static delete(id) {
        return DeviceModel.deleteOne({ _id: id });
    }

    static getAll() {
        return DeviceModel.find();
    }

}

module.exports = Device;
