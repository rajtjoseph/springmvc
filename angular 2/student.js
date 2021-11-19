angular.module('studentApp', [])
  .controller('StudentController', function($scope) {

	var students = [
		{firstName: "Raj", lastName: "Joseph", address: "1234 Raj Street", city: "Houston", state: "TX", country:"USA"}
	];
	
	$scope.addThisStudent = function() {
		$scope.students.push({firstName:$scope.firstName, lastName:$scope.lastName, address:$scope.address, city:$scope.city, state:$scope.state, country:$scope.country});
		//firstName = '';
	};	
	$scope.students = students;
	$scope.firstName = students.firstName;
	$scope.lastName = students.lastName;
	$scope.address = students.address;
	$scope.city = students.city;
	$scope.state = students.state;
	$scope.country = students.country;
	
  });