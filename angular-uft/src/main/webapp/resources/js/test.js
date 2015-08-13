var myApp = angular.module('myApp',[]);

myApp.directive('onFinishRender', function ($timeout) {
    return {
        restrict: 'A',
        link: function (scope, element, attr) {
            if (scope.$last === true) {
                $timeout(function () {
                    scope.$emit('ngRepeatFinished');
                });
            }
        }
    }
});

myApp.controller('UserCtrl', ['$scope', function($scope) {
    //set users from global var
    $scope.users = [
                    {
                        id:0,
                        firstName:'Bob',
                        lastName:'Smith'
                    },
                    {
                        id:1,
                        firstName:'John',
                        lastName:'Appleseed'
                    },
                     {
                        id:2,
                        firstName:'Jim',
                        lastName:'Doe'
                    }
                ];
    
    $scope.$on('ngRepeatFinished', function (ngRepeatFinishedEvent) {
    	$('.collapse').on('show.bs.collapse', function () {
    	    $('.collapse.in').collapse('hide');
    	});
	});
}]);