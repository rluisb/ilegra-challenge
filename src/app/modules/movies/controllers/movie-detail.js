(function () {
  'use strict';

  angular
    .module('app')
    .directive('swmMovieDetail', swmMovieDetail);

  swmMovieDetail.$inject = ['$uibModal'];

  function swmMovieDetail($uibModal) {
    return {
      restrict: 'AE',
      link: function (scope, element) {
        element.on('click', function () {
          openModal();
        });

        function openModal() {
          scope.modal = $uibModal.open({
            animation: true,
            size: 'md',
            templateUrl: 'app/modules/movies/templates/movie-detail.html',
            scope: scope
          });
        }
      }
    };
  }
})();
