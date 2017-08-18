(function() {
    'use strict';

    app.factory('allData', function($http) {
        return {
            // DDL
            getCountries: function() {
                return $http.get('./../data/ddl/country.json')
            },
            getStates: function() {
                return $http.get('./../data/ddl/state.json')
            },
            getCities: function() {
                return $http.get('./../data/ddl/city.json')
            },

            //MS
            getBeveragesType: function() {
                return $http.get('./../data/ms/beverage-types.json')
            },
            getAllBeverages: function() {
                return $http.get('./../data/ms/all-beverages.json')
            },

            //Custom MS
            getPerson: function() {
                return $http.get('./../data/custom-ms/person.json')
            },

            //Grid Filter 
            getGridData: function() {
                return $http.get('./../data/grid-filter/gridFilter.json')
            }


        }


    })

}());