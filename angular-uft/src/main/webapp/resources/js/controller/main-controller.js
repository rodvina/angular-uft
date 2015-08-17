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
	.controller('mainCtrl', ['$scope', '$log', 'tracking', '$http', function($scope, $log, tracking, $http) {
		//set max rows to display at a time before loading more
		var maxresults = 15;
		$scope.results = [];
		$scope.allresults = [];
		$scope.totalCount;
		
		//search function
		$scope.search = function() {
			$log.info("searching for "+$scope.searchtext);

			//use $http service directly here instead of relying on separate service module
//			$http.get('/uft/rest/v1/ft/requests')
//				.success(function(data) {
//					$scope.allresults = data;
//				});
			//perform search via serviceMod
//			$scope.allresults = tracking.search($scope.searchtext);
			
			//perform search via serviceMod which will return a promise
			tracking.search($scope.searchtext)
				.success(function(data) {
					$scope.allresults = data;
					$scope.totalCount = $scope.allresults.length;
					//slice all results to predefined max
					$scope.results = $scope.allresults.slice(0, maxresults);
					$scope.showResults = true;
				})
				.error(function(err) {
					//do something with error
				});

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
			$log.info("mainCtrl:getting request detail for "+result.uuid);
			$scope.requestdetail = tracking.viewDetails(result.uuid);
			$scope.showDetails = true;
		};
		
		//show packet detail
		$scope.viewPacket = function(packet) {
			$log.info("mainCtrl:getting packet detail for "+packet.PacketID);
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

