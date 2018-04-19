(function() {
    'use strict';

    angular.module('app')
        .service('hackService', hackService);

    function hackService($http) {
        var vm = this;
        vm.getPizzaList = getPizzaList;

        function getPizzaList() {
            return $http.get('../pizza.json');
        }
    }

    module.exports = hackService;
})();
