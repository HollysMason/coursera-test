// (function () {
//   'use sctrict';
//
//   angular.module('FirstTask', [])
//
//   .controller('CountFoodController', CountFoodController);
//   CountFoodController.$inject = ['$scope', '$filter'];
//
//   function CountFoodController ($scope, $filter) {
//     $scope.food = "";
//     $scope.message = "";
//     $scope.cost = .45;
//     $scope.blah = "Cookie ";
//     $scope.sayMessage = function () {
//       return $filter('uppercase')("the anser is" + $filter('currency')(42, " pidor ", 28));
//     }
//     $scope.countFood = function () {
//       if ($scope.food === "") {
//          $scope.message = "Please enter data first";
//          return;
//       }
//       var arrOfFood = $scope.food.split(',');
//
//       if (arrOfFood.length <= 3) {
//         $scope.message = "Enjoy!";
//       } else if (arrOfFood.length > 3) {
//         $scope.message = "Too much!";
//       }
//
//     };
//   }
// })();
(function () {
  angular.module('FirstTask', [])
  .controller('customFilterTest', customFilterTest)
  // (2) registrate custom filter function
  .filter('love', lovesFilter);

  customFilterTest.$inject = ['$scope', 'lovesFilter'];//(3)add custom filter to inject ??


  function customFilterTest($scope, lovesFilter) { // (4) don't forget about adding parameters
    $scope.sayMessage = function () {
      var msg = "I love JavaScript language";
      return msg;
    };
    $scope.name = " hui";
    $scope.sayLovesMessage = function () {
      var msg = "I love JavaScript language";
      msg = lovesFilter(msg);
      return msg;
    };
  }
  // (1) create custom filter function
  function lovesFilter() {
    return function (input) {
      input = input || "";
      input = input.replace('love', 'like');
      return input;
    };
  }
})();
