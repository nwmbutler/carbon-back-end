var carCalculate = require ('../modules/carCalculator')
var busCalculate = require ('../modules/busCalculator')
var trainCalculate = require ('../modules/trainCalculator')
var planeCalculate = require ('../modules/planeCalculator')

function directToCalculator(mode, value) {
    if (mode == 'driving') {
        return carCalculate(value, mode);
    } else if (mode == 'bus') {
        return busCalculate(value)
    } else if (mode == 'train') {
        return trainCalculate(value)
    } else {
        return planeCalculate(value)
    } 
  }
module.exports = directToCalculator;