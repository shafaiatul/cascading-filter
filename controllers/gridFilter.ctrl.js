(function() {
    'use strict';
    app
    .controller('gridFilter', function ($scope, allData) {
        $scope.itemSelecteds = {};
        $scope.dummyModel = {};
        allData.getGridData().then((response) => {
            $scope.items = response.data;
        })
        
        
        $scope.selectItem = function (item) {
          // If checkbox is checked
          if ($scope.dummyModel[item.id]) {
            $scope.itemSelecteds[item.id] = item;
          } 
        }
        
        $scope.update = function () {
          console.log($scope.itemSelecteds);
        }
        
        
    })

}());