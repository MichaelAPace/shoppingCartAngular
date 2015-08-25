app.config(function($routeProvider, $locationProvider){

  $routeProvider
  .when('/', {
    templateUrl: 'partials/home.html'
  }).when('/cart', {
    templateUrl:'partials/shoppingCart.html'
  }).otherwise({redirectTo:"/"});

  $locationProvider.html5Mode(true);
});
