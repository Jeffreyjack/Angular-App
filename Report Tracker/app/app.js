(function(){
    'use strict';
    // Declare app level module which depends on views, and components
    angular.module('reportTracker', [
      'ngRoute',
      'reportTracker.login',
      'reportTracker.services',
      'reportTracker.dashboard',
      'reportTracker.assignments',
      'reportTracker.bibleStudy',
      'reportTracker.returnVisits',
      'reportTracker.others',
      
    ]).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/login'});
    }]);})();
