var express = require('express');
var router = express.Router();
var axios = require ('axios');
var directToCalculator = require ('../modules/calculatorDirector')
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

    emissions = directToCalculator(journey_data_out.mode, google_data_in.distance.value)
    distance_text = google_data_in.distance.text
    duration = google_data_in.duration.text
    returnedData = {emissions, duration,distance_text}
    res.send({ data: returnedData});
    
  });
});

module.exports = router;
