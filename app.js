(function () {
  "use strict"

angular.module("NameCalculator", [])

.controller("NameCalculatorController", function ($scope) {
  $scope.name = "";
  $scope.totalValue = 0;

  $scope.displayNumeric = function () {
    var totaNameValue = calculateNumericForSctring($scope.name);
    $scope.totalValue = totaNameValue;
  };

  function calculateNumericForSctring(string) {
    var totaStringValue = 0;
    for (var i = 0; i < string.length; i++) {
      totaStringValue += string.charCodeAt(i);
    }

    return totaStringValue;
  }
});

})()
