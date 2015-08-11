'use strict';
angular.module('serviceMod', [])
	.factory('doSearch', ['$http', '$log', 
        function ($http, $log) {
			$log.info('instantiating serviceMod...')
//  			return $http.get('/codecademy/rest/shows')
//  				.success(function(data) {
//  					return data;
//  				})
//                .error(function(err) {
//                    return err;
//                });
			return function(searchText) {
				$log.info('instantiating function to search...')
				var data = [{
			
						"requestDate" : "20150204",
						"company" : "SLI",
						"source" : "Billing System",
						"policyNumber" : "2389473",
						"effDate" : "20160213",
						"referenceNo" : "2389473",
						"referenceType" : "Billing Number",
						"event" : "BCMINVA",
						"packetType" : "Invoice",
						"completedFlag" : "C",
						"packetId" : "10494735"
					},
					{
						"requestDate" : "20140204",
						"company" : "SLI",
						"source" : "Policy System",
						"policyNumber" : "2389473",
						"effDate" : "20160513",
						"referenceNo" : "2389473",
						"referenceType" : "Billing Number",
						"event" : "BCMINVA",
						"packetType" : "Invoice",
						"completedFlag" : "C",
						"packetId" : "10494739"
					}];
				return data;
			}
}]);  

