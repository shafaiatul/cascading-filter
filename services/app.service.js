(function() {
    'use strict';

    app.factory('allData', function($http) {
        return {
            getCountries: function() {
                return $http.get('./../data/country.json')
            },
            getStates: function() {
                return $http.get('./../data/state.json')
            },
            getCities: function() {
                return $http.get('./../data/city.json')
            }
        }


    })

}());