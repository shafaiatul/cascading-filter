(function() {
    'use strict';
    app.controller('cascadingMS', function($scope, allData, $timeout) {

        // Variables - Public
        $scope.filter = {};
        
        
        
        //Beverages Types
        allData.getBeveragesType().then(function(response) {
            $scope.beverageTypes = response.data;
        });
        
        // All Beverages
        allData.getAllBeverages().then(function(response) {
            $scope.allBeverages = response.data;         
        });

        // Select the Beverage type
        $scope.beverageTypeChange = function(e) {
            $scope.chosenBeverageType = [];
            
            
            $scope.allBeverages.forEach(function(beverage) {
                if(e.sender.selectedIndex === beverage.beverageId) {
                    $scope.chosenBeverageType.push(beverage);
                }
            })

            console.log($scope.chosenBeverageType);
                    
        }
        
        

        // $scope.prices = [
        //     {name: 'Wine A', price: '12.99'},
        //     {name: 'Wine B', price: '4.99'},
        //     {name: 'Wine C', price: '6.99'},
        //     {name: 'Wine D', price: '8.99'},
        //     {name: 'Wine E', price: '8.99'},
        //     {name: 'Wine F', price: '8.99'},
        //     {name: 'Wine G', price: '12.50'},
        //     {name: 'Wine H', price: '12.00'}    
        // ]

        
        // Functions - Public
        
        $scope.filterByCategory = filterByCategory;
        $scope.getCategories = getCategories;
        
        // Functions - Definitions
        function filterByCategory(beverage) {
            // return $scope.filter[beverage.category] || noFilter($scope.filter);
            return $scope.filter[beverage.category];
        }
        // Gives the non duplicate category
        function getCategories() {
            return ($scope.chosenBeverageType || [])
            .map( (beverage) =>  beverage.category)
            .filter((elem, pos, arr) => arr.indexOf(elem) === pos);
        }

        // function noFilter(filterObj) {
        //     return Object.
        //     keys(filterObj).
        //     every(function (key) { return !filterObj[key]; });
        // }

    })

}());