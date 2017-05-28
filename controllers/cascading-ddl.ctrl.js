(function() {
    'use strict';
    app
    .controller('cascadingDDL', function ($scope, allData) {

        // --------Country--------
        allData.getCountries().then(function(response) {
            $scope.countrylist = response.data;
        })
        
        $scope.countryChosen = false; // Initially country is not selected
        $scope.countryChange = function(e) {
            $scope.countryChosen = true;
            if(e.sender.text() === 'select country') {
                $scope.countryChosen = false;
            }
        }
       
       // ----------State----------
        allData.getStates().then(function(response) {
            $scope.statelist = response.data;
        })

        $scope.stateChosen = false; // Initially state is not selected
        $scope.stateChange = function(e) {
            $scope.stateChosen = true;
            if(e.sender.text() === 'select state') {
                $scope.stateChosen = false;
            }
        }
            
        // ----------City-----------
        allData.getCities().then(function(response) {
            $scope.citylist = response.data;
        })

        $scope.cityChosen = false; // Initially city is not selected
        $scope.cityChange = function(e) {
            $scope.cityChosen = true;
            if(e.sender.text() === 'select city') {
                $scope.cityChosen = false;
            }
        }
            
        
        // Save after all the filteration
        $scope.save = function() {
            var result = {            
                Country: $scope.country,
                State: $scope.state,
                City: $scope.city,
            }
            console.log(JSON.stringify(result));
                
        }
        
    })

}());