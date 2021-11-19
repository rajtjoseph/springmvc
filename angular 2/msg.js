angular.module('module1', [])
  .controller('myController', function($scope) {
	    var person = {
			firstName: "Raj",
			lastName: "Joseph",
			Address: "1234 Raj Street",
			City: "Houston",
			State: "TX",
			Country: "USA"
		};
	    $scope.student = person;
		$scope.message = "You have been chosen for a price of a Ford Truck 2017 !!";
    });