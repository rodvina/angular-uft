'use strict';
angular.module('trackingService', [])
	//service for search
	.service('tracking', ['$http', '$log', 'mockdata',
        function ($http, $log, mockdata) {
			$log.info('instantiating tracking service...')
			//search function
			this.search = function(searchText) {
				$log.info('calling search function...')
				//returns a promise
				return $http.get('/uft/rest/v1/ft/requests');
				
//				return mockdata.search(searchText);
			};
			
			//view details function
			this.viewDetails = function(uuid) {
				$log.info('calling view details function for uuid: '+uuid);
				return mockdata.viewDetails(uuid);
//				$log.debug('returning data: '+JSON.stringify(data));

			}
	}])