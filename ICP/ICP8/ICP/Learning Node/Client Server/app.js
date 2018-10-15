'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [])


    .controller('View1Ctrl', function ($scope, $http) {
        $scope.langugaesList = new Array();
        $scope.mostRecentReview;
        $scope.getCountries = function () {

            var placeEntered = document.getElementById("txt_placeName").value;

            if (placeEntered != null && placeEntered != "") {
                // document.getElementById('div_ReviewList').style.display = 'none';
               // This is the API that gives the list of venues based on the place and search query.
                var handler = $http.get("https://restcountries.eu/rest/v2/capital/"+placeEntered);

                handler.success(function (data) {

                    if (data != null) {
$scope.CountryName = data[0].name;
document.getElementById("flag").innerHTML = "<img src=\""+data[0].flag+"\">";
$scope.subregion = data[0].subregion;
$scope.language = data[0].languages[0].name;

                    }

                })
                handler.error(function (data) {
                    alert("There was some error processing your request. Please try after some time.");
                });
            }
        }

    });
