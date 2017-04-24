(function() {
  'use strict';

  angular
    .module('app.winelist')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'winelist',
        config: {
          url: '/winelist',
          templateUrl: 'app/winelist/winelist.html',
          controller: 'WinelistController',
          controllerAs: 'vm',
          title: 'winelist',
          settings: {
            nav: 2,
            content: '<i class="fa fa-list"></i> Wine List'
          }
        }
      }
    ];
  }
})();
