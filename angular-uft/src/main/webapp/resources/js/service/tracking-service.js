'use strict';
angular.module('trackingService', [])
	//service for search
	.service('tracking', ['$http', '$log', 'mockdata',
        function ($http, $log, mockdata) {
			$log.info('instantiating tracking service...')
			
			//search function
			this.search = function(searchText) {
//  			return $http.get('/codecademy/rest/shows')
//				.success(function(data) {
//					return data;
//				})
//            .error(function(err) {
//                return err;
//            });
				$log.info('calling search function...')
				
				return mockdata.search(searchText);
			};
			
			//view details function
			this.viewDetails = function(uuid) {
				$log.info('calling view details function for uuid: '+uuid);
				return mockdata.viewDetails(uuid);
//				$log.debug('returning data: '+JSON.stringify(data));

			}
	}])