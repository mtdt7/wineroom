(function() {
  'use strict';

  angular
    .module('app.frontpage')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'frontpage',
        config: {
          url: '/',
          templateUrl: 'app/frontpage/frontpage.html',
          controller: 'FrontpageController',
          controllerAs: 'vm',
          title: 'frontpage',
          settings: {
            nav: 1,
            content: '<i class="fa fa-glass"></i> Front Page'
          }
        }
      }
    ];
  }
})();
