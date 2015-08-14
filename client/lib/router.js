'use strict';
angular.module('sismncApp')
    .config(function($stateProvider) {
        $stateProvider
            .state('main', {
                url:'/',
                templateUrl: 'client/main/main.view.ng.html',
                controller: Zion.controller.main
            })
            .state('about', {
                url: '/about',
                templateUrl: 'client/about/about.view.ng.html',
                controller: Zion.controller.about,
                onExit: alert('opaaaa entrouuuuu')
            });
    })