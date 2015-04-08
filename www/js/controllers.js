angular.module('PGControllers', [])

.controller('NavCtrl', function($scope, $ionicSideMenuDelegate) {
  $scope.showMenu = function () {
    $ionicSideMenuDelegate.toggleLeft();
  };
})

.controller('MainCtrl', function($scope) {
})

.controller('SetupCtrl', function($scope, Resources) {

	$scope.players = Resources.getPlayers();
	$scope.maps = Resources.getMaps();
	$scope.decks = Resources.getDecks();
})

.controller('CalculatorCtrl', function($scope) {
})

.controller('TimerCtrl', function($scope) { 
})

.controller('FaqCtrl', function($scope, $stateParams) {
});
