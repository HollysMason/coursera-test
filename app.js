(function () {
"use strict"

angular.module("myFirstApp", [])

.controller("myFirstController", function ($scope) {
    $scope.name = "Vlad";
    $scope.sayHello = function() {
      return "Hello my name is" + $scope.name;
    };
    $scope.countOfMarks = function() {
      return $scope.name.length;
    }
});

})();
