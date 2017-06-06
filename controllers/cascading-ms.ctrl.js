(function() {
    'use strict';
    app.controller('cascadingMS', function($scope, allData) {

        // Initially none of the nonDuplicateBeverageCategories checkboxes are checked
        $scope.checked = {
            nonDuplicateBeverageCategories: []
        }
        // Initially none of the availableBeverages checkboxes are checked
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
            $scope.chosenBeverageType = []; // reset the chosenBeverageType under nonDuplicateBeverageCategories
            $scope.checked.nonDuplicateBeverageCategories = []; // reset the nonDuplicateBeverageCategories checkboxes
            $scope.checked.availableBeverages = []; // reset the availableBeverages checkboxes
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
            $scope.filter = {};
            $scope.checked.availableBeverages = []; // reset the availableBeverages checkboxes
            
        }

    })

}());
