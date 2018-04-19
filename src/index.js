(function() {
    var angular = require('angular');

    angular.module('app', []);

    angular.module('app').controller('HackController', require('./hack.controller'));

    angular.module('app').service('HackService', require('./hack.service'));
})();
