(function() {
    'use strict';
    app
    .controller('customMS', function ($scope, allData) {

        $scope.selectedItems = "";
        $scope.user = {
            roles: []
        };

        // --------Person--------
        allData.getPerson().then(function(response) {
            $scope.allPerson = response.data;
        })
        
        $scope.checkAll = function() {
            $scope.user.roles = $scope.allPerson.map(function(item) { return item.id; });
        };
        $scope.uncheckAll = function() {
            $scope.user.roles = [];
        };
        
    })

}());