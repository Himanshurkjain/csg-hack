(function (angular) {
    'use strict';

    angular.module('app')
        .controller('HackController', HackController);

    function HackController(hackService) {
        var vm = this;
        vm.pizzaList = [];

        init();

        function init() {
            hackService.getPizzaList()
                .then(function(res) {
                    vm.pizzaList = res.data.pizzas;
                    vm.isLoading = false;
                })
        }

    }

    module.exports = HackController;
})(angular);
