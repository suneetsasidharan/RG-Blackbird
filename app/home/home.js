'use strict';

angular.module('myApp.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'HomeCtrl'
  });
}])

.controller('HomeCtrl', ['$scope', function($scope) {
        $scope.triggers = [{id:'trigger1'}];


        $scope.addTrigger =  function(){
            var newItemNo = $scope.triggers.length+1;
            $scope.triggers.push({'id':'trigger'+newItemNo});
    };

        $scope.removeTrigger = function() {
            var lastItem = $scope.triggers.length-1;
            $scope.triggers.splice(lastItem);
        };

}]);