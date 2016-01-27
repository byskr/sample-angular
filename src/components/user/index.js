'use strict';

var RoutingConfig = require('./config');

module.exports = angular.module('user', [])
    .controller('UserListController', require('./controller/user-list-controller'))
    .config(function ($stateProvider) {
        angular.forEach(RoutingConfig, function (config, name) {
            $stateProvider.state(name, config);
        });
    });