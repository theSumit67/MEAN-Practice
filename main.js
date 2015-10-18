var myApp = angular.module('MyApp', ['ngRoute', 'ngMessages']);

myApp.config(function ($routeProvider) {
    
    $routeProvider.
    when("/home", {
        redirectTo: 'index.html'
    }).
    when("/form", {
        templateUrl: 'view/form.htm',
        controller: 'formCtrl'
    }).
    when("/ngCommon", {
        templateUrl: 'view/ngCommon.htm',
        controller: 'ngCommonCtrl'
    }).
    when("/services", {
        templateUrl: 'view/services.htm',
        controller: 'servicesCtrl'
    }).
    when("/directive", {
        templateUrl: 'view/directive.htm',
        controller: 'directiveCtrl'
    }).
    when("/crud", {
        templateUrl: 'view/crud.htm',
        controller: 'crudCtrl'
    });
    
});
