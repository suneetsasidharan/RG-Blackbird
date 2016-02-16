'use strict';

angular.module('myApp.examples', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/examples', {
    templateUrl: 'examples/examples.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', [function() {

}]);