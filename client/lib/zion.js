Zion = {
    controller: {
        main: function($scope, $meteor) {
              $scope.things = $meteor.collection(Things);
              $meteor.autorun($scope, function() {
                $meteor.subscribe('things');
              });

              $scope.save = function() {
                if($scope.form.$valid) {
                  $scope.things.save($scope.newThing);
                  $scope.newThing = undefined;
                }
              };

              $scope.remove = function(thing) {
                $scope.things.remove(thing);
              };
        },

        about: function($scope) {
            $scope.viewName = 'About2';
        }
    }
};