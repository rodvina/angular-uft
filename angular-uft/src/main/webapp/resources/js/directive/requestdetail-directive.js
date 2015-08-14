angular.module('requestDetailDirective', [])
	.directive('requestDetail', function ($timeout) {
	    return {
	        restrict: 'E',
	        scope: {
	        	trackingrequest: '='
	        },
//	        template: '<div>yo yo directive</div>',
	        templateUrl: 'resources/js/directive/request-detail.html',
	        controller: 'mainCtrl'
	    }
});
	