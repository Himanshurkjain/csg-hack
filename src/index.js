(function() {
    var angular = require('angular');

    angular.module('app', []);

    angular.module('app').controller('PizzaController', require('./pizza.controller'));

    angular.module('app').service('PizzaService', require('./pizza.service'));
})();
