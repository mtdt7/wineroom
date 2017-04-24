(function() {
  'use strict';

  angular
    .module('app.wine')
    .controller('WineController', WineController);

  WineController.$inject = ['$scope', '$stateParams', '$q', 'dataservice', 'logger', 'lodash', '$modal', '$timeout', 'WineService'];
  /* @ngInject */
  function WineController($scope, $stateParams, $q, dataservice, logger, lodash, $modal, $timeout, WineService) {
    var vm = this;
    var _ = lodash;

    vm.id = $stateParams.id;

    vm.slider = {
      value: 1,
      options: {
        floor: 1,
        ceil: 10,
        showTicks: true,
        showTicksValues: true
      }
    };

    if (vm.id == 'new') {

    } else {
      WineService.getWine(vm.id).then(function (result) {
        vm.wine = result;
      })
    }


    activate();

    vm.regions = [
      "Italy", "Spain", "France", "United States", "China", "Argentina", "Chile", "Australia", "South Africa",
      "Germany", "Portugal", "Romania", "Greece", "Russia", "New Zealand", "Brazil", "Hungary", "Austria", "Serbia",
      "Moldova", "Bulgaria", "Georgia", "Switzerland", "Ukraine", "Japan", "Peru", "Uruguay", "Canada", "Algeria",
      "Czech Republic", "Macedonia", "Croatia", "Turkey", "Mexico", "Turkmenistan", "Morocco", "Uzbekistan",
      "Slovakia", "Belarus", "Kazakhstan", "Tunisia", "Albania", "Montenegro", "Lebanon", "Slovenia", "Colombia",
      "Luxembourg", "Cuba", "Estonia", "Cyprus", "Azerbaijan", "Bolivia", "Madagascar", "Bosnia and Herzegovina",
      "Armenia", "Lithuania", "Egypt", "Israel", "Belgium", "Latvia", "Malta", "Zimbabwe", "Kyrgyzstan", "Paraguay",
      "Ethiopia", "Jordan", "United Kingdom", "Panama", "Tajikistan", "Liechtenstein", "Syria", "Reunion"
  ];

    vm.colors = [
      'Red', 'White', 'Rosè'
    ];

    vm.refreshSlider = function () {
      $timeout(function () {
        $scope.$broadcast('rzSliderForceRender');
      });
    };

    vm.save = function () {
      if (vm.id == 'new') {
        WineService.postWine(vm.wine).then(function (result) {
          console.log(result)
        })
      } else {

      }
    };

    function activate() {

    }

  }
})();
