var myApp = angular.module("myApp", ['ui.router', 'myLogin', 'myHome']);
myApp.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when('/Home', '/Home/Grocery');
    $stateProvider       
    .state('Login', {
        url: '/Login',
        templateUrl: 'LoginPage.html',
        controller: 'LoginPageCtrl'
    })
     .state('Home', {
         url: '/Home',
         abtract: true,
         templateUrl: 'HomePage.html',
         controller: 'HomePageCtrl'
     })
    .state('Home.Grocery', {
        url: '/Grocery',       
        templateUrl: 'Grocery.html',
        controller: 'HomePageCtrl'
    
    }).state('Home.Movies', {
        url: '/Movies',
        templateUrl: 'Movies.html',
        controller: 'HomePageCtrl'
    });;
    //$urlRouterProvider.otherwise()
}]);