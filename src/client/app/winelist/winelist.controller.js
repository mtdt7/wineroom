(function() {
  'use strict';

  angular
    .module('app.winelist')
    .controller('WinelistController', WinelistController);

  WinelistController.$inject = ['$scope', '$q', 'logger', 'lodash', '$modal', '$timeout', 'WineService'];
  /* @ngInject */
  function WinelistController($scope, $q, logger, lodash, $modal, $timeout, WineService) {
    var vm = this;
    var _ = lodash;


    WineService.getWineList().then(function (result) {
      vm.winelist = result.data;
      console.log(vm.winelist);
      vm.recentlyOpenedGridOptions.data = result.data;

    });

    // vm.recentlyOpened = [{
    //   'opened': '2/15/17',
    //   'year': 2012,
    //   'wine': 'Quintessa',
    //   'format': 'Standard'
    // }, {
    //   'opened': '2/13/17',
    //   'year': 2013,
    //   'wine': 'Silver Oak Cabernet Alexander',
    //   'format': 'Magnum'
    // }, {
    //   'opened': '2/24/17',
    //   'year': 2010,
    //   'wine': 'Silver Oak Cabernet Nappa',
    //   'format': '3 Liter'
    // }, {
    //   'opened': '2/01/17',
    //   'year': 2011,
    //   'wine': 'Opus One',
    //   'format': 'Standard'
    // }, {
    //   'opened': '1/15/17',
    //   'year': 2012,
    //   'wine': 'Sassicaia',
    //   'format': 'Magnum'
    // }, {
    //   'opened': '3/04/17',
    //   'year': 2012,
    //   'wine': 'Quintessa',
    //   'format': 'Standard'
    // }, {
    //   'opened': '4/21/17',
    //   'year': 2013,
    //   'wine': 'Silver Oak Cabernet Alexander',
    //   'format': 'Magnum'
    // }, {
    //   'opened': '3/22/17',
    //   'year': 2010,
    //   'wine': 'Silver Oak Cabernet Nappa',
    //   'format': '3 Liter'
    // }, {
    //   'opened': '3/23/17',
    //   'year': 2011,
    //   'wine': 'Opus One',
    //   'format': 'Standard'
    // }, {
    //   'opened': '3/28/17',
    //   'year': 2012,
    //   'wine': 'Sassicaia',
    //   'format': 'Magnum'
    // }];

    vm.recentlyOpenedGridOptions = {
      data: vm.winelist,
      rowHeight: 40,
      enableColumnMenus: false,
      columnDefs: [
        { field: 'Vineyard', displayName: 'Vineyard', width: '15%' },
        { field: 'GrapeType', displayName: 'Wine', width: '*' },
        { field: 'Year', displayName: 'Year', width: '5%' },
        { field: 'Format', displayName: 'Bottle Format', width: '10%' },
        { field: 'NumberOfBottles', displayName: 'Stock', width: '5%' },
        { field: 'Color', displayName: 'Color', width: '5%' },
        { field: 'options', displayName: '', width: '5%', enableSorting: false, cellClass: 'textCenter',
          cellTemplate: '<a ui-sref="wine({ id: \'{{row.entity.ID}}\' })"><button type="button" class="btn btn-sm btn-primary btn-table">' +
                            '<i class="fa fa-info-circle"></i></button></a>' }
      ]
    };

    vm.sortByOptions = [
      { value: 'vinyard', label: 'Vinyard' },
      { value: 'grape_type', label: 'Wine' },
      { value: 'year', label: 'Year' },
      { value: 'format', label: 'Format' },
      { value: 'number_of_bottles', label: 'Stock' }
    ];

    vm.slider = {
      minValue: 1,
      maxValue: 10,
      enabled: false,
      options: {
        floor: 1,
        ceil: 10,
        showTicks: true,
        showTicksValues: true
      }
    };

    vm.colors = [
      { value: 'red', label: 'Red' },
      { value: 'white', label: 'White' },
      { value: 'rose', label: 'Rosè' }
    ];

    vm.formats = [
      { value: 'half', label: 'Half' },
      { value: 'standard', label: 'Standard' },
      { value: 'magnum', label: 'Magnum' },
      { value: '3liter', label: 'Three Liter' },
      { value: '6liter', label: 'Six Liter' },
      { value: '18Liter', label: 'Eighteen Liter' }
    ];

    vm.refreshSlider = function () {
      $timeout(function () {
        $scope.$broadcast('rzSliderForceRender');
      });
    };

    vm.filters = false;
    vm.showFilter = function () {
      vm.filters = !vm.filters;
    };

    activate();

    function activate() {

    }

  }
})();
