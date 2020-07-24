function calculate(distance, mode) {
  if (mode == 'car') {
    return distance * (122.1 / 1000);
  } else {
    return 0;
  }
}
module.exports = calculate;
