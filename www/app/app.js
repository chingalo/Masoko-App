angular.module('blogSample',[])
    .controller('mainController', function ($scope, $rootScope) {
        $scope.location = false;
        var onSuccess = function(position) {
            $rootScope.$apply(function() {
                $scope.position = position;
                alert(JSON.stringify(position));
            });
        };
        var onError = function(error) {
            alert('ERROR! code: ' + error.code + ' ' + 'message: ' + error.message);
        };

        $scope.getMyLocation = function(){
            $scope.location = true;
            navigator.geolocation.getCurrentPosition(onSuccess, onError, {timeout: 10000, enableHighAccuracy: true});
        }
    });
