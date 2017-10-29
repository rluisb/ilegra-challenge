(function () {
  'use strict';

  angular
    .module('app')
    .config(moduleConfig);

  moduleConfig.$inject = ['$stateProvider'];

  function moduleConfig($stateProvider) {
    $stateProvider
      .state('swm.movies', {
        url: '/movies',
        templateUrl: 'app/modules/movies/templates/movie-list.html',
        controller: 'MovieListController',
        controllerAs: 'vm',
        resolve: {
          movies: function (swapi) {
            return swapi.films.all().then(function (movies) {
              return movies.results;
            })
            .catch(function () {
              return [];
            });
          }
        }
      });
  }
})();
