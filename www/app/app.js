angular.module('blogSample')
    .controller('mainController', function ($scope, $rootScope) {
        var onSuccess = function(position) {
            $rootScope.$apply(function() {
                $scope.position = position;
            });
        };
        var onError = function(error) {
            console.log('ERROR! code: ' + error.code + ' ' + 'message: ' + error.message);
        };
        navigator.geolocation.getCurrentPosition(onSuccess, onError, {timeout: 10000, enableHighAccuracy: true});
    });