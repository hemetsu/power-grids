angular.module('PGControllers', [])

.controller('NavCtrl', function($scope, $ionicSideMenuDelegate) {
  $scope.showMenu = function () {
    $ionicSideMenuDelegate.toggleLeft();
  };
})

.controller('MainCtrl', function($scope) {
})

.controller('SetupCtrl', function($scope) {
})

.controller('CalculatorCtrl', function($scope) {
})

.controller('TimerCtrl', function($scope) { 
})

.controller('FaqCtrl', function($scope, $stateParams) {
});
