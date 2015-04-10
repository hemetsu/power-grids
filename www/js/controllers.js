angular.module('PGControllers', [])

.controller('NavCtrl', function($scope, $ionicSideMenuDelegate) {
  $scope.showMenu = function () {
    $ionicSideMenuDelegate.toggleLeft();
  };
})

.controller('MainCtrl', function($scope) {
})

.controller('SetupCtrl', function($scope, Utilities, $localstorage, Resources) {

	/* Resources */

	$scope.players = Resources.getPlayers();
	$scope.maps = Resources.getMaps();
	$scope.decks = Resources.getDecks();
	$scope.limits = Resources.getLimits();

	/* Selected vars */

	$scope.sMap = $localstorage.getObject('sMap', $scope.maps[0]);
	$scope.sDeck = $localstorage.getObject('sDeck', $scope.decks[0]);
	$scope.sPlayers = $localstorage.getObject('sPlayers', angular.copy($scope.players));

	/* Generated vars */

	$scope.numRegions = 0;
	$scope.numCitiesForPhaseTwo = 0;
	$scope.numCitiesForEndGame = 0;
	$scope.startingMoney = 50;
	$scope.startingResources = 0;
	$scope.sRegions = [];
	$scope.playerOrder = [];

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

		// Update localstorage vars
		$localstorage.setObject('sMap', $scope.sMap);
		$localstorage.setObject('sDeck', $scope.sDeck);
		$localstorage.setObject('sPlayers', $scope.sPlayers);

		// Calculate Regions and Limits
		$scope.calculateRegionsAndLimits();
		// Randomize
		$scope.randomize();
	}

	$scope.calculateRegionsAndLimits = function() {
		// Get starting resource
		$scope.startingResources = $scope.sMap.startcost;
		// Calculate regions and limits
		switch ($scope.sPlayers.length) {
			case 2:
				$scope.numRegions = 3;
				$scope.numCitiesForPhaseTwo = 10;
				$scope.numCitiesForEndGame = 21;
				break;
			case 5:
				$scope.numRegions = $scope.sPlayers.length;
				$scope.numCitiesForPhaseTwo = 7;
				$scope.numCitiesForEndGame = 15;
				break;
			case 6:
				$scope.numRegions = 5;
				$scope.numCitiesForPhaseTwo = 6;
				$scope.numCitiesForEndGame = 14;
				break;
			default:
				$scope.numRegions = $scope.sPlayers.length;
				$scope.numCitiesForPhaseTwo = 7;
				$scope.numCitiesForEndGame = 17;
		}
	}

	$scope.randomize = function() {
		$scope.sRegions = Utilities.randomSelect($scope.sMap.regions.names, $scope.numRegions);
		$scope.playerOrder = Utilities.randomSelect($scope.sPlayers, $scope.sPlayers.length);
	}

	// Init
	$scope.calculateRegionsAndLimits();
	$scope.randomize();

})

.controller('CalculatorCtrl', function($scope) {
})

.controller('TimerCtrl', function($scope) { 
})

.controller('FaqCtrl', function($scope, $stateParams) {
});
