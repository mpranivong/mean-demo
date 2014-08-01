var Hotel = require('../models/hotel');

module.exports.create = function (req, res) {
  //console.log(req.body);

  var hotel = new Hotel(req.body);
  hotel.save();

};
