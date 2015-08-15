'use strict';

/**
 * @ngdoc overview
 * @name EscrowRajApp
 * @description
 * # EscrowRajApp
 *
 * Main module of the application.
 */
angular
  .module('EscrowRajApp', [
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/buyer', {
        templateUrl: 'views/buyer.html',
        controller: 'BuyerCtrl',
        controllerAs: 'buyer'
      })
      .when('/seller', {
        templateUrl: 'views/seller.html',
        controller: 'SellerCtrl',
        controllerAs: 'seller',
        access: {
          requiresLogin: true
        }
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/signup', {
        templateUrl: 'views/signup.html',
        controller: 'SignupCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .run(['$rootScope','$location', 'auth', function($rootScope, $location, auth){
    $rootScope.$on('$routeChangeStart', function(event, next) {
      if(next.access && next.access.requiresLogin) {
        if (!auth.isAuthenticated()) {
          $location.path('/login');
        }
      }
    });
  }]);
