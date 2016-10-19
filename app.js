(function () {
  'use sctrict';

  angular.module('FirstTask', [])

  .controller('CountFoodController', CountFoodController);
  CountFoodController.$inject = ['$scope'];

  function CountFoodController ($scope) {
    $scope.food = "";
    $scope.message = "";

    $scope.countFood = function () {
      if ($scope.food === "") {
         $scope.message = "Please enter data first";
         return;
      }
      var arrOfFood = $scope.food.split(',');

      if (arrOfFood.length <= 3) {
        $scope.message = "Enjoy!";
      } else if (arrOfFood.length > 3) {
        $scope.message = "Too much!";
      }

    };
  }
})();
