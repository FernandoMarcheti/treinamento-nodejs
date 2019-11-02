const DeviceType = require('./device-type.enum');

const devicesDB = {};
let deviceIndexDB = 1;

class Device {

    constructor() {
        this.id = '';
        this.name = '';
        this.type = DeviceType.LAMP;
    }

    static create(device) {
        device.id = deviceIndexDB++;
        devicesDB[device.id] = device;    
    }

    static getById(id) {
        return devicesDB[id];
    }

    static update(device) {
        return devicesDB[device.id] = device;
    }

    static delete(id) {
        return delete devicesDB[id];
    }

    static getAll() {
        return Object.values(devicesDB);
    }

}

module.exports = Device;
