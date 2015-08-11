'use strict';

/**
 * Controller module of the application.
 */
angular.module('controllerMod', [])
	.controller('mainCtrl', ['$scope', '$log', 'doSearch', function($scope, $log, doSearch) {
		
		//search function
		$scope.search = function() {
			$log.info("searching for "+$scope.searchtext);
			//perform search via serviceMod
			$scope.results = doSearch($scope.searchtext);
			$scope.showResults = true;
		};
		
		//clear the textbox
		$scope.clear = function() {
			$scope.searchtext = "";
			$scope.showResults = false;
		};
		
		//view request detail
		$scope.viewRequestDetail = function(uuid) {
			$log.info("getting request detail for "+uuid);
		};
	
	}]) 

	.controller('resultsCtrl', ['$scope', function($scope) {
		

	
	}])
	
	.controller('requestDetailCtrl', ['$scope', function($scope) {
		
	
	
	}]) 

