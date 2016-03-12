/**
 * Account Review App
 * Designed to stand by itself, but could attached to bigger SPA scope through merging states
 *
 */
var yourComponent =angular.module('yourComponent', ['framework']);

angular.module('yourComponent').config(function ($stateProvider, $urlRouterProvider) {'use strict';
    $urlRouterProvider.otherwise('/spa/yourComponent/login'); //default a URL, make sure page is in angular scope

    $stateProvider
        .state('spa', {  //global base state - hold config vars, remoteBaseService
            url: '/spa',
            templateUrl: 'layouts/default.layout.html',  //choose layout: default
            controller: 'SpaController',
            abstract: true
        })
        .state('yourComponent', {  //app base state - hold common objects
            url: '/yourComponent',
            parent: 'spa',
            templateUrl: 'components/componentsApp.html',
            controller: 'YourComponentAppController',
            abstract: true
        })
        .state('login', {
            url: '/login',
            parent: 'yourComponent',
            templateUrl: 'components/login.html',
            controller: 'LoginController'
        })
        .state('page', {
            url: '/page',
            parent: 'yourComponent',
            templateUrl: 'components/page.html',
            controller: 'ComponentsDetailsController'
        })
});