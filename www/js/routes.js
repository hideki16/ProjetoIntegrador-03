angular.module('starter.routes', [])

.config(function($stateProvider, $urlRouterProvider) {
   $stateProvider
  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  .state('map', {
     url: '/map',
     templateUrl: 'templates/map.html',
     controller: 'MapCtrl'
   })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/');

});
