app.config(function($routeProvider,$locationProvider){
    $locationProvider.hashPrefix('');
    $routeProvider.when('/',{
        templateUrl:'views/home.html'
    }).when('/about',{
        templateUrl:'views/about.html',
    }).when('/search',{
        templateUrl:'views/search.html',
        controller:'newsctrl' 
    }).otherwise({template:'No Data Available'});
});