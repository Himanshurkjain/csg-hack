(function (angular) {
    'use strict';

    angular.module('app')
        .controller('PizzaController', PizzaController);

    function PizzaController(pizzaService) {
        var vm = this;
        vm.pizzaList = [];
        vm.isLoading = true;

        vm.sortPizza = sortPizza;
        vm.sortToggle = false;

        init();

        function init() {
            pizzaService.getPizzaList()
                .then(function(res) {
                    vm.pizzaList = res.data.pizzas;
                    vm.isLoading = false;
                })
        }

        function sortPizza() {
            vm.sortToggle = (vm.sortToggle) ? false : true;
            (vm.sortToggle) ? vm.pizzaList.sort() : vm.pizzaList.sort().reverse();
        }
    }

    module.exports = PizzaController;
})(angular);
