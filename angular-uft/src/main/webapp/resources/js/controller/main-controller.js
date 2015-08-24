'use strict';

/**
 * Controller module of the application.
 */
angular.module('mainController', [])
//	.directive('onFinishRender', function ($timeout) {
//	    return {
//	        restrict: 'A',
//	        link: function (scope, element, attr) {
//	            if (scope.$last === true) {
//	                $timeout(function () {
//	                    scope.$emit('ngRepeatFinished');
//	                });
//	            }
//	        }
//	    }
//	})
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
//			$scope.allresults = tracking.search($scope.searchtext);
			
			//perform search via serviceMod which will return a promise
			tracking.search($scope.searchtext)
				.then(function(data) {
					$scope.allresults = data;
					$scope.totalCount = $scope.allresults.length;
					//slice all results to predefined max
					$scope.results = $scope.allresults.slice(0, maxresults);
					$scope.showResults = true;
				});
//				.error(function(err) {
//					//do something with error
//				});

		};
		
		$scope.canLoad = true;
		//loads more results
		$scope.loadMore = function() {
			if ($scope.results.length != $scope.totalCount) {
				var last = $scope.results.length - 1;
				for(var i=1; i<=maxresults; i++) {
					$scope.results.push($scope.allresults[last+i]);
					
					if ($scope.results.length >= $scope.totalCount) {
						$scope.canLoad = false;
						return;
					}
				}
			}
		}
		
		//clear the textbox
		$scope.clear = function() {
			$scope.searchtext = "";
			$scope.showResults = false;
			$scope.showDetails = false;
			$scope.canLoad = true;
			$scope.results = [];
			$scope.allresults = [];
		};
		
		//view request detail
		$scope.viewDetail = function(result) {
			$log.info("mainCtrl:getting request detail for "+result.uuid);
			$scope.requestdetail = tracking.viewDetails(result.uuid);
			$scope.showDetails = true;
			$scope.detailToShow = "request";
			$scope.isCollapsed = !$scope.isCollapsed; 
		};
		
		//show packet detail
		$scope.viewPacket = function(packet) {
			$log.info("mainCtrl:getting packet detail for "+packet.PacketID);
			$scope.detailToShow = "packet";
			//if necessary, call service to get packet info
			$scope.packet = packet;
			
		}
		
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
		

	
	}]) 

