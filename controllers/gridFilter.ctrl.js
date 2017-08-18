(function() {
    'use strict';
    app
    .controller('gridFilter', function ($scope, allData) {
      allData.getGridData().then( (response) => {
        $scope.providers = response.data;
      })
      
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
      
      $scope.checkAllFilterTypes = function(d) {
        console.log(d);
          $scope.user.reportTypes = d.map(function(item) { return item.reportId; });
      };
      $scope.uncheckAllFilterTypes = function() {
          $scope.user.reportTypes = [];
      };






      $scope.Submit= function() {
        console.log($scope.user.providers);
      }
        
    })

}());
