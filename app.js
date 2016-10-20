(function () {
  'use sctrict';

  angular.module('Filterts', [])
  .controller('CustomFilter', CustomFilter)
  .filter('loves', LovesFilter)
  .filter('truth', TruthFilter);

  CustomFilter.$inject = ['$scope', 'lovesFilter'];

  function CustomFilter($scope, lovesFilter) {
    $scope.test = "test";
    $scope.sayMessage = function () {
      var msg = "I like JavaScript language";
      return msg;
    };
      $scope.sayLoveMessage = function () {
      var msg = "I like JavaScript language";
      msg = lovesFilter(msg);
      return msg;
    };
  }

  function LovesFilter() {
    return function (input) {
      input = input || "";
      input = input.replace('like', 'love');
      return input;
    };
  }

  function TruthFilter() {
    return function (input, target, replace) {
      input = input || "";
      input = input.replace(target, replace);
      return input;
    };
  }
})();
