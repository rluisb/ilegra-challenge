(function () {
  angular
    .module('app', ['ui.router', 'ui.bootstrap', 'ne.swapi']);

  angular
    .module('app')
    .config(routesConfig);

  routesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

  /** @ngInject */
  function routesConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/movies');

    $stateProvider
      .state('swm', {
        // url: '/',
        abstract: true,
        templateUrl: 'app/shared/app/main.html',
        controller: 'MoviesController',
        controllerAs: 'swm'
      });
  }
})();
