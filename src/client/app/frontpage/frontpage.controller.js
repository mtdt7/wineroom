(function() {
  'use strict';

  angular
    .module('app.frontpage')
    .controller('FrontpageController', FrontpageController);

  FrontpageController.$inject = ['$scope', '$q', 'dataservice', 'logger', 'lodash', '$modal', '$timeout'];
  /* @ngInject */
  function FrontpageController($scope, $q, dataservice, logger, lodash, $modal, $timeout) {
    var vm = this;
    var _ = lodash;

    vm.recentlyOpened = [{
      'opened': '2/15/17',
      'year': 2012,
      'wine': 'Quintessa',
      'format': 'Standard'
    }, {
      'opened': '2/13/17',
      'year': 2013,
      'wine': 'Silver Oak Cabernet Alexander',
      'format': 'Magnum'
    }, {
      'opened': '2/24/17',
      'year': 2010,
      'wine': 'Silver Oak Cabernet Nappa',
      'format': '3 Liter'
    }, {
      'opened': '2/01/17',
      'year': 2011,
      'wine': 'Opus One',
      'format': 'Standard'
    }, {
      'opened': '1/15/17',
      'year': 2012,
      'wine': 'Sassicaia',
      'format': 'Magnum'
    }, {
      'opened': '3/04/17',
      'year': 2012,
      'wine': 'Quintessa',
      'format': 'Standard'
    }, {
      'opened': '4/21/17',
      'year': 2013,
      'wine': 'Silver Oak Cabernet Alexander',
      'format': 'Magnum'
    }, {
      'opened': '3/22/17',
      'year': 2010,
      'wine': 'Silver Oak Cabernet Nappa',
      'format': '3 Liter'
    }, {
      'opened': '3/23/17',
      'year': 2011,
      'wine': 'Opus One',
      'format': 'Standard'
    }, {
      'opened': '3/28/17',
      'year': 2012,
      'wine': 'Sassicaia',
      'format': 'Magnum'
    }];

    vm.recentlyOpened = _.sortBy(vm.recentlyOpened, ['opened']);

    vm.recentlyOpenedGridOptions = {
      data: vm.recentlyOpened,
      rowHeight: 38,
      enableColumnMenus: false,
      columnDefs: [
        { field: 'opened', displayName: 'Opened', width: '15%' },
        { field: 'wine', displayName: 'Wine, Producer', width: '*' },
        { field: 'year', displayName: 'Year', width: '10%' },
        { field: 'format', displayName: 'Bottle Format', width: '20%' },
        { field: 'options', displayName: '', width: '15%', enableSorting: false, cellClass: 'textCenter',
          cellTemplate: '<button type="button" class="btn btn-sm btn-default btn-table" ' +
                              'ng-click="grid.appScope.vm.showModal(row)">' +
                            '<i class="fa fa-pencil-square-o"></i></button>' +
                        '<a ui-sref="admin"><button type="button" class="btn btn-sm btn-primary btn-table">' +
                            '<i class="fa fa-info-circle"></i></button></a>' }
      ]
    };
    vm.enteringGridOptions = {
      data: vm.recentlyOpened,
      rowHeight: 38,
      enableColumnMenus: false,
      columnDefs: [
        { field: 'wine', displayName: 'Wine, Producer', width: '*' },
        { field: 'year', displayName: 'Year', width: '20%' },
        { field: 'options', displayName: '', width: '15%', enableSorting: false, cellClass: 'textCenter',
          cellTemplate: '<a ui-sref="admin"><button type="button" class="btn btn-sm btn-primary btn-table">' +
                          '<i class="fa fa-info-circle"></i></button></a>' }
      ]
    };
    vm.leavingGridOptions = {
      data: vm.recentlyOpened,
      rowHeight: 38,
      enableColumnMenus: false,
      columnDefs: [
        { field: 'wine', displayName: 'Wine, Producer', width: '*' },
        { field: 'year', displayName: 'Year', width: '20%' },
        { field: 'options', displayName: '', width: '15%', enableSorting: false, cellClass: 'textCenter',
          cellTemplate: '<a ui-sref="admin"><button type="button" class="btn btn-sm btn-primary btn-table">' +
          '<i class="fa fa-info-circle"></i></button></a>' }
      ]
    };

    vm.slider = {
      value: 1,
      options: {
        floor: 1,
        ceil: 10,
        showTicks: true,
        showTicksValues: true
      }
    };

    vm.commentModal = $modal({
      scope: $scope,
      templateUrl: 'app/modals/commentModal.html',
      show: false,
      title: 'Share your experience'
    });
    activate();

    vm.refreshSlider = function () {
      $timeout(function () {
        $scope.$broadcast('rzSliderForceRender');
      });
    };

    vm.showModal = function(row) {
      vm.currentRow = row;
      vm.commentModal.$promise.then(
        vm.commentModal.show
      );
      vm.refreshSlider();

    };

    function activate() {

    }

  }
})();
