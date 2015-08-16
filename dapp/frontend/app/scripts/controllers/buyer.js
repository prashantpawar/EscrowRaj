'use strict';

/**
 * @ngdoc function
 * @name EscrowRajApp.controller:BuyerCtrl
 * @description
 * # BuyerCtrl
 * Controller of the EscrowRajApp
 */
angular.module('EscrowRajApp')
  .controller('BuyerCtrl', ['$scope', 'escrow', function ($scope, escrow) {
      $scope.encKeySecret = 'loverboy';
      $scope.sellerAddress = '46fa4c2d60305df40a74b8cbc04773d9bd5ad295';
      $scope.etherAmount = '0.5';
      $scope.memo = 'For Bar Mitzvah';

      $scope.sendContract = function () {
          var unsubmittedContract = escrow.createContract($scope.encKeySecret);
          escrow.submitContract(unsubmittedContract, $scope.encKeySecret)
            .then(function (contract) {
                $scope.contractBalance = contract.balance.toString();
                $scope.contractAddress = contract.address.toString();
            });
      };
  }]);
