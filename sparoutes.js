app.config(function($routeProvider,$locationProvider){
    $locationProvider.hashPrefix('');
    $routeProvider.when('/',{
        templateUrl:'views/home.html'
    }).when('/about',{
        templateUrl:'views/about.html',
    }).when('/login',{
        templateUrl:'views/login.html',
    }).when('/archive',{
        templateUrl:'views/archive.html',
    }).when('/current',{
        templateUrl:'views/current.html',
    }).when('/search',{
        templateUrl:'views/search.html', 
    }).otherwise({template:'No Data Available'});
});
