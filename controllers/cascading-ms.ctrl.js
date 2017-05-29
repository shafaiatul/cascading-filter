(function() {
    'use strict';
    app.controller('cascadingMS', function($scope, allData, $timeout) {

        $scope.checked = {
            nonDuplicateBeverageCategories: []
        }

        $scope.checked = {
            availableBeverages: []
        }
        
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
        $scope.beverageTypeChosen = false;
        $scope.beverageTypeChange = function(e) {
            $scope.filter = {};
            $scope.chosenBeverageType = []; 
            $scope.beverageTypeChosen = true;
            
            if(e.sender.text() === 'select type') {
                $scope.beverageTypeChosen = false;
            }
            $scope.allBeverages.forEach(function(beverage) {
                if(e.sender.selectedIndex === beverage.beverageId) {
                    $scope.chosenBeverageType.push(beverage);
                }
            })

            console.log($scope.chosenBeverageType);

            $scope.nonDuplicateBeverageCategories = getCategories();
            
                    
        }
    

        
        // Functions - Public      
        $scope.filterByCategory = filterByCategory;
        $scope.getCategories = getCategories;
        
        
        function filterByCategory(beverage) {
            return $scope.filter[beverage.category];
        }
        // Gives the non duplicate categories from the chosenBeverageType 
        function getCategories() {
            return ($scope.chosenBeverageType || [])
            .map( (beverage) =>  beverage.category)
            .filter((elem, pos, arr) => arr.indexOf(elem) === pos);
        }
        

        // Submit the selected beverageType, checked.nonDuplicateBeverageCategories, checked.availableBeverages
        $scope.submit = function() {
            var result = {
                BeverageType: $scope.beverageType,
                CheckedCategories: $scope.checked.nonDuplicateBeverageCategories,
                CheckedAvailableBeverages: $scope.checked.availableBeverages
            }
            
            console.log(result);

            $scope.result = result;

        }

    })

}());