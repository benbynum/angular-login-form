var myApp = angular.module('myApp', [])

myApp.factory('focus', function($timeout, $window) {
    return function (id) {
      $timeout(function() {
        var element = $window.document.getElementById(id);
        if(element)
          element.focus();
      })
    }
  });

myApp.controller('MyController', function ($scope, focus) {
  $scope.flipCard = function() {
    $scope.loginclass = "flip-180";
    $scope.registerclass = "flip-360";
    focus('Register-Focus');
  };

  $scope.flipBack = function() {
    $scope.loginclass = "flip-0";
    $scope.registerclass = "flip-180";
    focus('Login-Focus');
  }

  $scope.submitForm = function() {
    alert('Submitted');
  }

});