(function() {
  'use strict';

  angular
    .module('app.core')
    .factory('WineService', WineService);

  WineService.$inject = ['$http', '$q', 'exception', 'logger', 'Restangular'];
  /* @ngInject */
  function WineService($http, $q, exception, logger, Restangular) {
    var service = {
      getWine: getWine,
      getWineList: getWineList,
      postWine: postWine,
      putWine: putWine,
      deleteWine: deleteWine
    };

    return service;


    function getWine (id) {
      var defer = $q.defer();
      Restangular.one('wine', id).get().then(function (result) {
        console.log("GET WINE", result);
        result.Tags = JSON.parse(result.Tags);
        defer.resolve(result);
      });
      return defer.promise;
    }

    function getWineList () {
      var defer = $q.defer();
      Restangular.all('wine').customGET("").then(function (result) {
        console.log("GET LIST", result);
        defer.resolve(result);
      });
      return defer.promise;
    }

    function postWine (wineObj) {
      var defer = $q.defer();
      console.log('LOOK HERE', wineObj);
      wineObj.Tags = JSON.stringify(wineObj.Tags);
      console.log('LOOK HERE', wineObj.Tags);
      Restangular.all('wine').post(wineObj).then(function (result) {
        console.log("POST WINE", result);
        defer.resolve(result);
      }, function (err) {
        console.log("ERROR", err)
      });
      return defer.promise;
    }

    function putWine (wineObj) {
      var defer = $q.defer();
      Restangular.one('wine', wineObj.id).save(wineObj).then(function (result) {
        console.log("PUT WINE", result);
        defer.resolve(result);
      });
      return defer.promise;
    }

    function deleteWine (wineObj) {
      var defer = $q.defer();
      Restangular.one('wine', wineObj.id).delete().then(function (result) {
        console.log("DELETE WINE", result);
        defer.resolve(result);
      });
      return defer.promise;
    }
  }
})();
