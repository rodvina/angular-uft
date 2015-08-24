'use strict';

/**
 *
 * Main module of the application.
 */
angular
  .module('angularUft', [
    'ngResource',
    'ngRoute',
    'infinite-scroll',
    'mainController',
    'trackingService',
    'accordionDirective',
    'requestDetailDirective',
    'mockdataService',
    'interceptorMod',
    'mgcrea.ngStrap'		//angular-strap for tabs
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/search.html',
        controller: 'mainCtrl'
      })
      .when('/details', {
        templateUrl: 'views/details.html',
        controller: 'detailCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  ;
