function directToCalculator(mode) {
    if (req.body.posted_data.mode == 'driving') {
        return carCalculate(google_data_in.distance.value, req.body.posted_data.mode);
    } else if (req.body.posted_data.mode == 'bus') {
        return busCalculate(google_data_in.distance.value)
    } else if (req.body.posted_data.mode == 'train') {
        return trainCalculate(google_data_in.distance.value)
    } else {
        return planeCalculate(google_data_in.distance.value)
    } 
  }
module.exports = directToCalculator;