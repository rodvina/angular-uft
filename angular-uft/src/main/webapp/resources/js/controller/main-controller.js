'use strict';

/**
 * Controller module of the application.
 */
angular.module('mainController', [])
	.controller('mainCtrl', ['$scope', '$log', 'tracking', function($scope, $log, tracking) {
		//set max rows to display at a time before loading more
		var maxresults = 15;
		$scope.results = [];
		$scope.allresults = [];
		$scope.totalCount;
		
		//search function
		$scope.search = function() {
			$log.info("searching for "+$scope.searchtext);
			//perform search via serviceMod
			$scope.allresults = tracking.search($scope.searchtext);
			$scope.totalCount = $scope.allresults.length;
			//slice all results to predefined max
			$scope.results = $scope.allresults.slice(0, maxresults);
			$scope.showResults = true;
		};
		
		//loads more results
		$scope.loadMore = function() {
			if ($scope.results.length != $scope.totalCount) {
				var last = $scope.results.length - 1;
				for(var i=1; i<=maxresults; i++) {
					$scope.results.push($scope.allresults[last+i]);
				}
			}
		}
		
		//clear the textbox
		$scope.clear = function() {
			$scope.searchtext = "";
			$scope.showResults = false;
			$scope.showDetails = false;
		};
		
		//view request detail
		$scope.viewDetail = function(result) {
			$log.info("getting request detail for "+result.uuid);
			$scope.details = tracking.viewDetails(result.uuid);
			$scope.showDetails = true;
		};
		
		//accordion functionality for results table
		$scope.$on('ngRepeatFinished', function (ngRepeatFinishedEvent) {
	    	$('.collapse').on('show.bs.collapse', function () {
	    	    $('.collapse.in').collapse('hide');
	    	});
		});

	
	}]) 

	.controller('resultsCtrl', ['$scope', function($scope) {
		

	
	}])
	
	.controller('detailCtrl', ['$scope', function($scope) {
		
		//view request detail
		$scope.viewDetail = function(result) {
			$log.info("getting request detail for "+result.uuid);
			$scope.details = tracking.viewDetails(result.uuid);
			$scope.showDetails = true;
		};
	
	}]) 

