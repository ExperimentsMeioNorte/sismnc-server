'use strict'

angular.module('sismncApp')
.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
  .primaryPalette('indigo')
  .accentPalette('blue');
});