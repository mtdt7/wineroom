(function() {
  'use strict';

  angular
    .module('app.wine')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'wine',
        config: {
          url: '/wine/:id',
          templateUrl: 'app/wine/wine.html',
          controller: 'WineController',
          controllerAs: 'vm',
          title: 'wine'
        }
      }
    ];
  }
})();
