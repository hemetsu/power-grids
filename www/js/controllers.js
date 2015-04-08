angular.module('PGControllers', [])

.controller('NavCtrl', function($scope, $ionicSideMenuDelegate) {
  $scope.showMenu = function () {
    $ionicSideMenuDelegate.toggleLeft();
  };
})

.controller('MainCtrl', function($scope) {
})

.controller('SetupCtrl', function($scope, Utilities, Resources) {

	/* Resources */

	$scope.players = Resources.getPlayers();
	$scope.maps = Resources.getMaps();
	$scope.decks = Resources.getDecks();
	$scope.limits = Resources.getLimits();

	/* Selected vars */

	$scope.sMap = $scope.maps[0];
	$scope.sDeck = $scope.decks[0];
	$scope.sPlayers = $scope.players[0];

	/* Generated vars */

	$scope.numRegions = $scope.sMap.regions.names.length;
	$scope.sRegions = Utilities.randomSelect($scope.sMap.regions.names, $scope.sPlayers);
	$scope.playerOrder = [];
	$scope.numCitiesForPhaseTwo = $scope.limits[$scope.sPlayers][0];
	$scope.numCitiesForPhaseThree = $scope.limits[$scope.sPlayers][1];
	$scope.startingMoney = 50;
	$scope.startingResouces = $scope.sMap.startcost;

	$scope.update = function() {
		$scope.sMap = (this.sMap) ? this.sMap : $scope.sMap;
		$scope.sDeck = (this.sDeck) ? this.sDeck : $scope.sDeck;
		$scope.sPlayers = (this.sPlayers) ? this.sPlayers : $scope.sPlayers;
	}

})

.controller('CalculatorCtrl', function($scope) {
})

.controller('TimerCtrl', function($scope) { 
})

.controller('FaqCtrl', function($scope, $stateParams) {
});
