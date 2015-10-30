/**
 * Created by joseph on 10/30/15.
 */
/*.controller('main',function($scope,$http){
    $scope.data = true;
    console.log('ok');
    $scope.login = function(){
        base = 'http://localhost:8080/demo';
        var url = base + '/dhis-web-commons-security/login.action?authOnly=true';
        // var url = base + '/api/me.json';
        *//* $http.get(url,{
         params : {
         j_username: "admin",
         j_password: "IROAD2015"
         },'Content-Type': 'application/json'}).success(function(data){
         console.log(data);
         });*//*

        $http.post(
            url,{},{withCredentials: true, params : {
                j_username: "admin",
                j_password: "IROAD2015"

            }}).then(function(data){
                console.log(JSON.stringify(data));
                if(! data.data){
                    alert('success');
                }
                else{
                    alert('fails');
                }
            },function(error){
                alert(JSON.stringify(error))
            });
    }
})*/
