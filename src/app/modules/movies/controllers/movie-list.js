(function () {
  'use strict';

  angular
    .module('app')
    .controller('MovieListController', MovieListController);

  MovieListController.$inject = ['movies'];

  function MovieListController(movies) {
    var vm = this;

    vm.movies = orderMovies(movies);

    function orderMovies(movies) {
      var moviesLength = movies.length;
      for (var index = moviesLength - 1; index >= 0; index--) {
        for (var auxIndex = 1; auxIndex <= index; auxIndex++) {
          if (new Date(movies[auxIndex - 1].release_date) > new Date(movies[auxIndex].release_date)) {
            var temp = movies[auxIndex - 1];
            movies[auxIndex - 1] = movies[auxIndex];
            movies[auxIndex] = temp;
          }
        }
      }
      return movies;
    }
  }
})();
