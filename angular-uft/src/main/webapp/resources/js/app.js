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
    'mockdataService'
  ])
//  .config(function ($routeProvider) {
//    $routeProvider
//      .when('/', {
//        templateUrl: 'views/main.html',
//        controller: 'MainCtrl'
//      })
//      .when('/about', {
//        templateUrl: 'views/about.html',
//        controller: 'AboutCtrl'
//      })
//      .otherwise({
//        redirectTo: '/'
//      });
//  })
  ;
