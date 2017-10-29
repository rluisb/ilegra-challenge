(function () {
  'use strict';

  angular
    .module('app')
    .component('appHeader', {
      templateUrl: 'app/shared/app/app-header.html',
      controller: [function () {
        var vm = this;
        vm.test = 'test';
      }],
      controllerAs: 'vm'
    });
})();
