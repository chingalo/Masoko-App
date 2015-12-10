angular.module('app',['ngStorage','ngCordova'])
    .controller('mainController',function($scope,$localStorage,$cordovaBarcodeScanner){

        $scope.barcode = function(){
            alert('inside btn');
            document.addEventListener("deviceready", function () {
                $cordovaBarcodeScanner.scan()
                    .then(function(barcodeData) {

                        alert('success');
                        alert(barcodeData);
                    }, function(error) {

                        alert('error');
                        alert(JSON.stringify(error));
                    });
                alert('after scan')
            }, false);
        };

        $scope.save = function() {
            $localStorage.myArray = [
                {
                    name: "Nic Raboy",
                    website: "https://blog.nraboy.com"
                },
                {
                    name: "Maria Raboy",
                    website: "http://www.mraboy.com"
                }
            ]
        };

        $scope.load = function() {
            if($localStorage.myArray){

                $scope.data = $localStorage.myArray;
            }

        }
    });

/*
 angular.module('blogSample',['ui.materialize'])
 .controller('mainController', function ($scope, $rootScope) {
 var baseUrl = 'http://41.86.177.185:8080/demo/';

 $scope.login = function(){

 }

 $scope.select = {
 value1: "Option1",
 value2: "I'm an option",
 choices: ["Option1", "I'm an option", "This is materialize", "No, this is Patrick."]
 };

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
 uploadFile(mediaFiles[i]);
 path = mediaFiles[i].fullPath;
 $scope.media.data = mediaFiles[i].fullPath;
 $scope.$apply();
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


 function uploadFile(mediaFile) {
 var ft = new FileTransfer(),
 path = mediaFile.fullPath,
 name = mediaFile.name;

 ft.upload(path,
 "",
 function(result) {
 alert('Upload success: ' + result.responseCode);
 alert(result.bytesSent + ' bytes sent');
 },
 function(error) {
 alert('Error uploading file ' + path + ': ' + error.code);
 },
 { fileName: name });
 }



 });
 */
