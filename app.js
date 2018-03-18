var app = angular.module('myApp',['ngRoute']);

app.config(function($routeProvider,$locationProvider){
    Stamplay.init("internshala-angularjs");
    $locationProvider.hashPrefix('');

    $routeProvider
        .when('/',{
            templateUrl: 'templates/home.html'
        })
        .when('/login',{
            templateUrl: 'templates/login.html'
        })
})
app.controller('myCtrl', function($scope){

})