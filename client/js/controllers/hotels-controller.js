app.controller('hotelsController', ['$scope', '$resource',
  function($scope, $resource) {

  var Hotel = $resource('/api/hotels');

  $scope.hotels = [
    {name: 'Hotel 1'},
    {name: 'Hotel 2'},
    {name: 'Hotel 3'}
  ]

  $scope.addHotel = function() {
      //$scope.hotels.push({name: $scope.hotelName });

      var hotel = new Hotel();
      hotel.name = $scope.hotelName;
      hotel.$save();

      $scope.hotelName = '';
  }

}]);
