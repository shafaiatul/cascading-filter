(function() {
    'use strict';
    
    var dateTimePicker = function($scope, $filter) {
        
        $scope.onTimeSet = function (newDate) {
            console.log($filter('date')(newDate, 'yyyy-MM-dd HH:mm'));
            
        }
        
    }



    app.controller('dateTimePicker', dateTimePicker);
}());