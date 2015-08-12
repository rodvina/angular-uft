'use strict';
angular.module('serviceMod', [])
	//service for search
	.factory('search', ['$http', '$log', 
        function ($http, $log) {
			$log.info('instantiating search service...')
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
						"policyNumber" : "2389474",
						"effDate" : "20160213",
						"referenceNo" : "2389474",
						"referenceType" : "Billing Number",
						"event" : "BCMINVA",
						"packetType" : "Invoice",
						"completedFlag" : "C",
						"packetId" : "10494735",
						"uuid" : "b55419eb-9194-4099-a6fc-8eee893e7157"
							
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
						"packetId" : "10494739",
						"uuid" : "b32246eb-9194-1111-a6fc-8eee893e7157"
					}];
				return data;
			}
	}])
	//service for request details
	.factory('requestDetails', ['$http', '$log', 
        function ($http, $log) {
			$log.info('instantiating requestDetails service...')
//  			return $http.get('/codecademy/rest/shows')
//  				.success(function(data) {
//  					return data;
//  				})
//                .error(function(err) {
//                    return err;
//                });
			return function(uuid) {
				$log.info('instantiating function to requestDetails...')
				var data = [{
			
						"requestDate" : "20150204",
						"company" : "SLI",
						"source" : "Billing System",
						"policyNumber" : "2389474",
						"effDate" : "20160213",
						"referenceNo" : "2389474",
						"referenceType" : "Billing Number",
						"event" : "BCMINVA",
						"packetType" : "Invoice",
						"completedFlag" : "C",
						"packetId" : "10494735",
						"uuid" : "b55419eb-9194-4099-a6fc-8eee893e7157"
							
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
						"packetId" : "10494739",
						"uuid" : "b32246eb-9194-1111-a6fc-8eee893e7157"
					}];
				return data;
			}	
	}])
