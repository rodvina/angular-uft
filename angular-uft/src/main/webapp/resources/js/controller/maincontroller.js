'use strict';

/**
 * Controller module of the application.
 */
angular.module('controllerMod', [])
	.controller('mainCtrl', ['$scope', 'doSearch', function($scope, doSearch) {
		
		//search function
		$scope.search = function() {
			//perform search via serviceMod
			$scope.results = doSearch($scope.searchtext);
			$scope.showResults = true;
		};
		
		//clear the textbox
		$scope.clear = function() {
			$scope.searchtext = "";
			$scope.showResults = false;
		};
	
	}]) 

	.controller('resultsCtrl', ['$scope', function($scope) {
		

	
	}])
	
	.controller('requestDetailCtrl', ['$scope', function($scope) {
		
	
	
	}]) 

