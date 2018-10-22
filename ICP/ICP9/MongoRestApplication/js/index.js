/**
 * Created by user on 23/10/2016.
 */
var myapp = angular.module('demoMongo',[]);


myapp.run(function ($http) {
    // Sends this header with any AJAX request
    $http.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
    // Send this header only in post requests. Specifies you are sending a JSON object
    $http.defaults.headers.post['dataType'] = 'json'
});
myapp.controller('MongoRestController',function($scope,$http){
    $scope.Users = new Array();
    $scope.insertData = function(){
        console.log($scope.formData.sname);
        console.log($scope.formData.course);
        console.log($scope.formData.classID);
        console.log($scope.formData.major);
        console.log($scope.formData.minor);
        var dataParams = {
            'StudentName' : $scope.sname,
            'ClassID' : $scope.classID,
            'Course' : $scope.course,
            'Major' : $scope.major,
            'Minor':$scope.minor
        };
        var config = {
            headers : {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
            }
        }
        var req = $http.post('http://127.0.0.1:8081/add',$scope.formData);
        req.success(function(data, status, headers, config) {
           alert("User "+$scope.formdata.sname+" added!")
            console.log(data);
        });
        req.error(function(data, status, headers, config) {
        });
    };

    $scope.search = function () {
        console.log($scope.searchData.majorSearch);
        var dataParams = {
            'Major': $scope.searchData.majorSearch
        }
        var config = {
            headers : {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
            }
        }
        var req = $http.get('http://127.0.0.1:8081/search' +
            "?major=" + $scope.searchData.majorSearch);
        req.success(function(data) {

            console.log("Status "+data.toString());
            for(var i = 0; i<data.length; i++){
$scope.Users[i]={
    Name:data[i].sname,
    ClassID: data[i].classID,
    Course:data[i].course,
    Major:data[i].major,
    Minor:data[i].minor
   }
 }
        });
        req.error(function(data, status, headers, config) {
            console.log("failure message: " + JSON.stringify({data: data}));
        });
    }
});