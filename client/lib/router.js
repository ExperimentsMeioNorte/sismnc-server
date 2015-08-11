'use strict';
angular.module('sismncApp')
    .config(function($stateProvider) {
        $stateProvider
            .state('about', {
                url: '/about',
                templateUrl: 'client/about/about.view.ng.html',
                controller: Zion.controller.about
            })
            /*.state('about2', {
                url: '/about2',
                templateUrl: 'client/about2/about2.view.ng.html',
                controller: Zion.controller.about2($scope)
            })*/;
    })