angular.module('blogSample',[])
    .controller('mainController', function ($scope, $rootScope) {
        $scope.location = false;
        var onSuccess = function(position) {
            $rootScope.$apply(function() {
                $scope.position = position;
                $scope.location = true;
            });
        };
        var onError = function(error) {
            alert('ERROR! code: ' + error.code + ' ' + 'message: ' + error.message);
        };

        $scope.getMyLocation = function(){
            $scope.location = false;
            navigator.geolocation.getCurrentPosition(onSuccess, onError, {timeout: 10000, enableHighAccuracy: true});
        }

        // Called when capture operation is finished
        //
        var captureSuccess = function(mediaFiles) {
            var i, len;
            for (i = 0, len = mediaFiles.length; i < len; i += 1) {
                //uploadFile(mediaFiles[i]);
                path = mediaFiles[i].fullPath;
                $scope.media.data = JSON.stringify(mediaFiles[i].fullPath);
            }
        }

        // Called if something bad happens.
        //
        var captureError =function(error) {
            var msg = 'An error occurred during capture: ' + error.code;
            navigator.notification.alert(msg, null, 'Uh oh!');
        }

        $scope.media = {
            type : '',
            data : ''
        }
        $scope.takeVideo = function(){

            $scope.location = false;
            $scope.media.type = 'video';
            navigator.device.capture.captureVideo(captureSuccess, captureError, {limit: 1});
        }

        $scope.takePhoto = function (){

            $scope.location = false;
            $scope.media.type = 'photo';
            navigator.device.capture.captureImage(captureSuccess, captureError, {limit: 1});
        }



    });
