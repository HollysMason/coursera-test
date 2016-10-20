(function () {
  'use sctrict';

  angular.module('CounterApp', [])
  .controller('CounterController', CounterController)
  .controller('secondCounter', secondCounter);
  secondCounter.$inject = ['$scope', '$timeout'];
  CounterController.$inject = ['$scope'];

  function secondCounter($scope, $timeout) {
    $scope.counter = 0;

    $scope.increment = function () {
      // (3) verik - best varik
      $timeout(function () {
        $scope.counter++;
        console.log('incremented!');
      }, 2000);
      // (2) varik - norm varik no ne good
      // setTimeout(function () {
      //   $scope.$apply(function() {
      //     $scope.counter++;
      //     console.log("incremented!");
      //   });
      // (1) varik - bad varik
        // $scope.counter++;
        // console.log("incremented!");
        // $scope.$digest()
      // }, 2000);
    };
  }

  function CounterController($scope) {
    $scope.onceCounter = 0;
    $scope.counter = 0;

    $scope.showNumberOfWatchers = function () {
        console.log("# of watchers: ", $scope.$$watchersCount);
        console.log($scope);
    };

    $scope.countOnce = function () {
      $scope.onceCounter = 1;
    };

    $scope.upCounter = function() {
      $scope.counter++;
    };

    // $scope.$watch('onceCounter', function (newValue, oldValue) {
    //   console.log("old value: ", newValue);
    //   console.log("new value: ", oldValue);
    // });
    //
    // $scope.$watch('upCounter', function (newValue, oldValue) {
    //   console.log("counter old value: ", newValue);
    //   console.log("counter new value: ", oldValue);
    // });
  }
})();
