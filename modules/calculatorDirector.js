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