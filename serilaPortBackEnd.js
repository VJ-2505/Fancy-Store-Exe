const { SerialPort } = require('serialport');
const { ReadlineParser } = require('@serialport/parser-readline')

const portList = () => {
    return SerialPort.list()
}


module.exports = {
    getPortList() {
        return portList
    }
}