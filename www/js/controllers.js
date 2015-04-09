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
	$scope.sPlayers = angular.copy($scope.players);

	/* Generated vars */

	$scope.numRegions = $scope.sMap.regions.names.length;
	$scope.sRegions = Utilities.randomSelect($scope.sMap.regions.names, $scope.sPlayers);
	$scope.playerOrder = [];
	$scope.numCitiesForPhaseTwo = $scope.limits[$scope.sPlayers.length][0];
	$scope.numCitiesForPhaseThree = $scope.limits[$scope.sPlayers.length][1];
	$scope.startingMoney = 50;
	$scope.startingResouces = $scope.sMap.startcost;

	$scope.update = function() {
		// Update map
		$scope.sMap = (this.sMap) ? this.sMap : $scope.sMap;
		
		// Update deck
		$scope.sDeck = (this.sDeck) ? this.sDeck : $scope.sDeck;
		
		// Update player list
		if (this.player) {
			var idx = $scope.sPlayers.indexOf(this.player);
			if (idx > -1) {
				$scope.sPlayers.splice(idx, 1);
			} else {
				$scope.sPlayers.push(this.player);
			}
		}

		console.log($scope.sMap);
		console.log($scope.sDeck);
		console.log($scope.sPlayers);
	}

})

.controller('CalculatorCtrl', function($scope) {
})

.controller('TimerCtrl', function($scope) { 
})

.controller('FaqCtrl', function($scope, $stateParams) {
});
