'use strict';
angular.module('interceptorMod', [])
	//service for search
	.factory('timestampMarker', ['$log', function ($log) {
		var timestampMarker = {
			request: function(config) {
				$log.debug("intercepted request...");
				config.reqTimestamp = new Date().getTime();
				config.headers['user'] = 'rodvina';
				return config;
			},
			
			response: function(response) {
				$log.debug("intercepted response...");
				response.config.respTimestamp = new Date().getTime();
				return response;
			}
		};
		
		return timestampMarker;
	}])
	.config(['$httpProvider', function($httpProvider) {
		$httpProvider.interceptors.push('timestampMarker');
	}])
