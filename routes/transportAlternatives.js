var express = require('express');
var router = express.Router();
var axios = require ('axios');
var busCalculate = require('../modules/busCalculator')
var trainCalculate = require('../modules/trainCalculator')

router.post('/', function(req, res) {
    var journey_data_out = req.body.posted_data
    // console.log(journey_data_out)

axios.get('https://maps.googleapis.com/maps/api/distancematrix/json', {

  params: {
    origins: journey_data_out.origin,
    destinations: journey_data_out.destination,
    mode: transit,
    transit_mode: journey_data_out.transport_mode,
    key: ''}})

  .then(function (response) {
    // console.log(response)
    var google_data_in = response.data.rows[0].elements[0]
    // console.log(google_data_in)
    if (req.body.posted_data.transit_mode == 'bus') {
      var emissions = busCalculate(google_data_in.distance.value)
      res.send({ distance: emissions});
    } else {
      var emissions = trainCalculate(google_data_in.distance.value)
      res.send({ distance: emissions});
    }
  });
});

module.exports = router;
