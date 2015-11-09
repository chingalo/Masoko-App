var blogSample = angular.module('blogSample', ['ngRoute','ui.bootstrap']);
blogSample.controller('mainController', function($scope, $route){
    $scope.latitude = blogSample.latitude;
    $scope.longitude = blogSample.longitude;
});
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
        navigator.geolocation.getCurrentPosition(app.onSuccess, app.onErr);
    },
    onErr: function(error)
    {
        alert('Unable to get your location.Without location you will not be able to use navigate feature! Error:' + '\n' + error.message);
    },

    onSuccess: function(position)
    {
        blogSample.latitude = position.coords.latitude;
        blogSample.longitude = position.coords.longitude;
    }
};



///**
// * Created by joseph on 10/30/15.
// */
///*.controller('main',function($scope,$http){
//    $scope.data = true;
//    console.log('ok');
//    $scope.login = function(){
//        base = 'http://localhost:8080/demo';
//        var url = base + '/dhis-web-commons-security/login.action?authOnly=true';
//        // var url = base + '/api/me.json';
//        *//* $http.get(url,{
//         params : {
//         j_username: "admin",
//         j_password: "IROAD2015"
//         },'Content-Type': 'application/json'}).success(function(data){
//         console.log(data);
//         });*//*
//
//        $http.post(
//            url,{},{withCredentials: true, params : {
//                j_username: "admin",
//                j_password: "IROAD2015"
//
//            }}).then(function(data){
//                console.log(JSON.stringify(data));
//                if(! data.data){
//                    alert('success');
//                }
//                else{
//                    alert('fails');
//                }
//            },function(error){
//                alert(JSON.stringify(error))
//            });
//    }
//})*/
//
///*
// /*
// *Function to handle login process to dspace system
// * Takes username as email and password from the form
// */
//$scope.user = {};
//$scope.loginUser = {};
//$scope.login = function(){
//
//
//    console.log('login user : ' + JSON.stringify($scope.loginUser));
//    //try to make request to login
//    var url = baseUrl + 'rest/login';
//    //{"email":"profschingalo@gmail.com", "password":"chingalo"}
//    $http.post(url,{"email":$scope.loginUser.email, "password":$scope.loginUser.password},{})
//        .then(function(response){
//            console.log('success login');
//            console.log('data : ' + response.data);
//
//            var url = baseUrl + 'rest/status';
//            $http.get(url,{
//                headers :{
//                    'rest-dspace-token' : response.data
//                }
//            }).then(function(data){
//                console.log(JSON.stringify(data));
//                $scope.user = data.data;
//
//                //$scope.logOut();
//            },function(error){
//                console.log('fail obtain user details' + JSON.stringify(error))
//            });
//
//        },function(error){
//            console.log('fail to login');
//            console.log(JSON.stringify(error))
//        });
//
//
//}
//
///*
// *function to handle log out functionality
// */
//$scope.logOut = function () {
//
//    console.log('login user : ' + JSON.stringify($scope.user.token ));
//    var url = baseUrl + 'rest/logout';
//    var token = $scope.user.token;
//    $http.post(url,{},{
//        headers :{
//            'rest-dspace-token' : token
//        }
//    }).then(function(data){
//            console.log(JSON.stringify(data));
//        }
//        ,function(error){
//            console.log('fail obtain user details' + JSON.stringify(error))
//        }
//    );
//}
//
//
//}*/
