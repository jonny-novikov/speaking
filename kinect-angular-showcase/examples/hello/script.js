(function() {

    angular.module('helloApp', [])
        .controller('hello', function ($scope) {
            $scope.message = 'AngularJS!';
        });

})();
