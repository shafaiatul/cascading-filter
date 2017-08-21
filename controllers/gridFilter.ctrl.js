(function() {
    'use strict';
    app
    .controller('gridFilter', function ($scope, allData) {
      allData.getGridData().then( (response) => {
        $scope.providers = response.data;
      })
      $scope.result = {};
      $scope.user = {
        providers: []
      };
      $scope.checkAll = function() {
        $scope.user.providers = angular.copy($scope.providers);
      };
      $scope.uncheckAll = function() {
        $scope.user.providers = [];
      };
      // Report Type
      $scope.selectedReportType = "";
      $scope.user = {
          reportTypes: []
      };
      
      





      $scope.Submit= function() {
       
        let arr_of_prodivers = $scope.result.user.providers;
        let chosenReportTypes =  ($scope.result.user.reportTypes);
        console.log(Object.keys(chosenReportTypes));
        let arr_of_chosenReportTypes = Object.keys(chosenReportTypes).map( (key) =>   chosenReportTypes[key] );
        
        arr_of_prodivers.forEach( (eachProvider, p_index) => {
          arr_of_chosenReportTypes.forEach( (eachChosenReportType, rt_index) => {
            if(p_index === rt_index) {
              eachProvider.reportTypes = eachChosenReportType;
            }
          })
        })

        console.log(JSON.stringify(arr_of_prodivers));
        
        $scope.result = {};
        allData.getGridData().then( (response) => {
          $scope.providers = response.data;
        })
      }
        
    })

}());
