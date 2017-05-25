(function() {
    'use strict';
    app.controller('cascadingMS', function($scope) {

        // Variables - Public
        $scope.filter = {};
        $scope.wines = [
            {name: 'Wine A', category: 'red'},
            {name: 'Wine B', category: 'red'},
            {name: 'Wine C', category: 'white'},
            {name: 'Wine D', category: 'red'},
            {name: 'Wine E', category: 'red'},
            {name: 'Wine F', category: 'white'},
            {name: 'Wine G', category: 'champagne'},
            {name: 'Wine H', category: 'champagne'}    
        ];
        
        // Functions - Public
        $scope.filterByCategory = filterByCategory;
        $scope.getCategories = getCategories;
        
        // Functions - Definitions
        function filterByCategory(wine) {
            // return $scope.filter[wine.category] || noFilter($scope.filter);
            return $scope.filter[wine.category];
        }
        // Gives the non duplicate category
        function getCategories() {
            return ($scope.wines || [])
            .map( (wine) =>  wine.category)
            .filter((elem, pos, arr) => arr.indexOf(elem) === pos);
        }

        // function noFilter(filterObj) {
        //     return Object.
        //     keys(filterObj).
        //     every(function (key) { return !filterObj[key]; });
        // }

    })

}());