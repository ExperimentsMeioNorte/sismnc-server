'use strict'

angular.module('sismncApp')
.controller('toolbarCtrl', function($scope) {

})
.directive('toolbar', function() {
  return {
    restrict: 'AE',
    templateUrl: 'client/components/toolbar/toolbar.view.ng.html',
    replace: true
  };
});