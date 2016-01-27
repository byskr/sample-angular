'use strict';

module.exports = angular.module('shared', [
    ]) //modulename + Kindelemente

    .config(['ResourceBuilderProvider', function (ResourceBuilderProvider) {
            var resources = require('./resource/index');
            ResourceBuilderProvider.addResources(resources);
        }
        ]
    );