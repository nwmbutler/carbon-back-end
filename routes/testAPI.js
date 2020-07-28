var express = require('express');
var router = express.Router();
var axios = require ('axios');
var carCalculate = require ('../modules/carCalculator')
var busCalculate = require ('../modules/busCalculator')
var trainCalculate = require ('../modules/trainCalculator')
router.post('/', function(req, res) {
    var journey_data_out = req.body.posted_data
    // console.log(journey_data_out)

axios.get('https://maps.googleapis.com/maps/api/distancematrix/json', {

  params: {
    origins: journey_data_out.origin,
    destinations: journey_data_out.destination,
    mode: journey_data_out.mode,
    key: `${process.env.API_KEY}`}})

  .then(function (response) {
    var google_data_in = response.data.rows[0].elements[0]

    console.log(response)

    if (req.body.posted_data.mode == 'driving') {
        var emissions = carCalculate(google_data_in.distance.value, req.body.posted_data.mode);
    } else if (req.body.posted_data.mode == 'bus') {
        var emissions = busCalculate(google_data_in.distance.value)
    } else {
        var emissions = trainCalculate(google_data_in.distance.value)
    }
    res.send({ distance: emissions});
  });
});

module.exports = router;
