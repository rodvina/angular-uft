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
    'mockdataService'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/search.jsp',
        controller: 'mainCtrl'
      })
      .when('/details', {
        templateUrl: 'views/details.jsp',
        controller: 'detailCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  ;
