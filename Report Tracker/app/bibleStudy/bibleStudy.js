(function(){
    'use strict';
    angular.module('reportTracker.bibleStudy', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/bibleStudy', {
        templateUrl: 'bibleStudy/bibleStudy.html',
        controller: 'bibleStudyController'
      });
    }])
    .controller('bibleStudyController', ['$scope',function($scope) {
        alert("bs");
        var demo= 10;
        function getdemo() {
        return demo;
        }
        
        $scope.login = function(user) {
            console.log(user);
        }
}]);
})();