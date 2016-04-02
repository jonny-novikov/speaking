(function() {
    angular.module('orderApp', [])
        .factory('api', function () {

            var api = {
              getServices: function() {
                  // Тестовые данные для генерации списка услуг в клиентском приложении
                  var services = [
                      {   name: 'Разработка',
                          price: 300,
                          active:true },
                      {   name: 'Дизайн',
                          price: 400,
                          active:false },
                      {   name: 'Интеграция',
                          price: 250,
                          active:false },
                      {   name: 'Обучение',
                          price: 220,
                          active:false
                      }
                  ];
                  return services;
              }
            };

            return api;
        });
})();


