(function() {
    'use strict';

    angular
        .module('app')
        .config(function ($routeProvider) {

            $routeProvider
                .when('/', {
                    templateUrl: '/app/main.html',
                    controller: 'MainCtrl',
                    controllerAs: 'vm'
                });

            $routeProvider.otherwise('/');
        });

}(window.angular));