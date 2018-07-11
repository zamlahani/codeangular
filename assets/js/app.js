var app = angular.module("productApp", []);
app.controller("headCtrl", function($scope, $http) {
$http.get(baseUrl+"/product/head/")
    .then(function(response) {
		$scope.title = response.data[0].value;
		$scope.description = response.data[1].value;
    });
});
