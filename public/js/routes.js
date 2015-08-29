app.config(function($routeProvider, $locationProvider){

  $routeProvider
  .when('/', {
    templateUrl: 'public/partials/home.html'
  }).when('/cart', {
    templateUrl:'public/partials/shoppingCart.html'
  }).otherwise({redirectTo:"/"});

  $locationProvider.html5Mode(true);
});
