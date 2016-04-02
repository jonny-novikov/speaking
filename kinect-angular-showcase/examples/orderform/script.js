(function() {
    angular.module('orderApp')
        .controller('order', function (api, $scope) {
            $scope.services = api.getServices();

            $scope.toggleActive = function(s){
                s.active = !s.active;
            };

            // Фунция получения общей стоимости
            $scope.total = function(){
                var total = 0;

                angular.forEach($scope.services, function(s){
                    if (s.active){
                        total+= s.price;
                    }
                });

                return total;
            };
        });

})();