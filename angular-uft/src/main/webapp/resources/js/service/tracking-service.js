'use strict';
angular.module('trackingService', [])
	//service for search
	.service('tracking', ['$http', '$log', 'mockdata',
        function ($http, $log, mockdata) {
			$log.info('instantiating tracking service...')
			
			//search function
			this.search = function(searchText) {
				$log.info('calling search function...')
				//opt1:returns a promise
//				return $http.get('/uft/rest/v1/ft/requests');
				
				//opt2:use then to evaluate response
				return $http.get('/uft/rest/v1/ft/requests').then(function(response) {
					var time = response.config.respTimestamp - response.config.reqTimestamp;
					console.log('The request took ' + time + ' ms.');
					return response.data;
				}, function(response){
					console.log('error');
				});
//				return mockdata.search(searchText);

			};
			
			//view details function
			this.viewDetails = function(uuid) {
				$log.info('calling view details function for uuid: '+uuid);
				return mockdata.viewDetails(uuid);
//				$log.debug('returning data: '+JSON.stringify(data));

			}
	}])