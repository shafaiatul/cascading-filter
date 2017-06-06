var app = 
    angular
    .module('cascadingFilterApp', ['kendo.directives', 'ui.router', 'checklist-model'])
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

    $stateProvider.state(cascadingDDL);
    $stateProvider.state(cascadingMS);
    $stateProvider.state(customMS);

    
});