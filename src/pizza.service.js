(function() {
    'use strict';

    angular.module('app')
        .service('pizzaService', pizzaService);

    function pizzaService($http) {
        var vm = this;
        vm.getPizzaList = getPizzaList;

        function getPizzaList() {
            return $http.get('../pizza.json');
        }
    }

    module.exports = pizzaService;
})();
