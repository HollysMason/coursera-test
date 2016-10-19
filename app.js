// (function () {
//   'use strict';
//
//
//   // .controller('DIController', 'MsgController', ['$scope', '$filter', DIController])
//   //
//   // function DIController($scope, $filter) {
//   //   $scope.name = "Vlad";
//   //
//   //   $scope.upper = function () {
//   //     var upCase = $filter('uppercase');
//   //     $scope.name = upCase($scope.name);
//   //   }
//   // }
//
//   angular.module('DIApp', [])
//   .controller("MsgController", MsgController)
//
//   MsgController.$inject = ['$scope'];
//   function MsgController($scope) {
//     $scope.name = "Vlad";
//     $scope.picture = "wayne";
//
//     $scope.sayMessage = function () {
//       return "Hello syka"
//     };
//     $scope.showWhoIsThis = function () {
//       $scope.picture = "batman";
//     }
//
//   }
// })();
(function () {
  'use sctrict';

  angular.module('DIApp', [])

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
