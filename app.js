var app = 
    angular
    .module('cascadingFilterApp', ['kendo.directives', 'ui.router', 'checklist-model', 'ui.bootstrap.datetimepicker'])
    .config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.hashPrefix('');

    $urlRouterProvider.otherwise('/cascadingDDL');
    
     

    var cascadingDDL = {
        name: 'cascadingDDL',
        url: '/cascadingDDL',
        templateUrl: 'views/cascading-ddl.html',
        controller: 'cascadingDDL'
    }

    var cascadingMS = {
        name: 'cascadingMS',
        url: '/cascadingMS',
        templateUrl: 'views/cascading-ms.html',
        controller: 'cascadingMS'
    }

    var customMS = {
        name: 'customMS',
        url: '/customMS',
        templateUrl: 'views/custom-ms.html',
        controller: 'customMS'
    }

    var dateTimePicker = {
        name: 'dateTimePicker',
        url: '/dateTimePicker',
        templateUrl: 'views/dateTimePicker.html',
        controller: 'dateTimePicker'
    }

    var gridFilter = {
        name: 'gridFilter',
        url: '/gridFilter',
        templateUrl: 'views/gridFilter.html',
        controller: 'gridFilter'
    }
    

    $stateProvider.state(cascadingDDL);
    $stateProvider.state(cascadingMS);
    $stateProvider.state(customMS);
    $stateProvider.state(dateTimePicker);
    $stateProvider.state(gridFilter);

    
});