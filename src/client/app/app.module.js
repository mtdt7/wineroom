(function() {
  'use strict';

  var app = angular.module('app', [
    'app.core',
    'app.widgets',
    'app.admin',
    'app.dashboard',
    'app.layout',
    'app.frontpage',
    'app.winelist',
    'app.wine',
    'mgcrea.ngStrap',
    'ui.grid',
    'ngLodash',
    'rzModule',
    'ngTagsInput',
    'google.places',
    'ui.toggle',
    'restangular'
  ]);

  app.config(function(RestangularProvider) {
    RestangularProvider.setBaseUrl('http://wineroomonline.gear.host/api/');
    RestangularProvider.setDefaultHeaders({'Content-type' : 'application/json'});

  });

  })();
