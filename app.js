var app = angular.module('learner', []);
app.controller('fillerController', function($scope) {
    $scope.begin= false;
    $scope.learnedName= "";
    $scope.filledData= "Hei -- Hi -- Aamupala -- Breakfast";
	
	$scope.fill = function() {
        $scope.begin = true;
    }
});