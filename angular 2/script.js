angular.module('my-app', [])
  .controller('StudentController', function($scope,$http) {

	//var students = [];
	//	{firstName: "Raj", lastName: "Joseph", address: "1234 Raj Street", city: "Houston", state: "TX", country:"USA"}
	//];
	
	//$scope.students = students;
	$scope.message = "This is angular students list program !!";
	
	var ongithubcall = function(response) {
		$scope.githubuser = response.data;
	};
	
	var onError = function(reason) {
		$scope.error = "Something got screwd up !!";
	};
	
	var onstudentlistcall = function(response) {
		$scope.students = response.data;
	};
	
	$http.get("http://localhost:8081/SampleWebApp/studentslist.jsp")
		.then(onstudentlistcall,onError);
		
		
	$http.get("http://api.github.com/users/mojombo")
		.then(ongithubcall, onError);
  });