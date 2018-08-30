angular.module('weather', ['ngSanitize'])
    .controller('weatherctrl', function($scope, $http) {

        $scope.getWeather = function() {
            $scope.cityName = document.getElementById("CityId").value;
            $scope.stateCode = document.getElementById("CodeId").value;
            // abbrState(stateCode, 'name');

            $http.get('https://api.wunderground.com/api/36b799dc821d5836/hourly/q/'+$scope.stateCode+'/'+$scope.cityName+'.json').success(function(data) {
                console.log(data);
                temp0 = data.hourly_forecast[0].temp.english;
                icon0 = data.hourly_forecast[0].icon_url;
                weather0 = data.hourly_forecast[0].condition;
                temp1 = data.hourly_forecast[1].temp.english;
                icon1 = data.hourly_forecast[1].icon_url;
                weather1 = data.hourly_forecast[1].condition;
                temp2 = data.hourly_forecast[2].temp.english;
                icon2 = data.hourly_forecast[2].icon_url;
                weather2 = data.hourly_forecast[2].condition;
                temp3 = data.hourly_forecast[3].temp.english;
                icon3 = data.hourly_forecast[3].icon_url;
                weather3 = data.hourly_forecast[3].condition;
                temp4 = data.hourly_forecast[4].temp.english;
                icon4 = data.hourly_forecast[4].icon_url;
                weather4 = data.hourly_forecast[4].condition;
                temp5 = data.hourly_forecast[5].temp.english;
                icon5 = data.hourly_forecast[5].icon_url;
                weather5 = data.hourly_forecast[5].condition;


                $scope.currentweather = {
                    html: "Currently " + temp0 + " &deg; F and " + weather0 +" "+ "<br/><img src='" + icon0 + "'/><br/>"+
                        "In one hour " + temp1 + " &deg; F and " + weather1 +" "+ "<br/><img src='" + icon1 + "'/><br/>"+
                    "In two hours " + temp2 + " &deg; F and " + weather2 +" "+ "<br/><img src='" + icon2 + "'/><br/>"+
                    "In three hours " + temp3 + " &deg; F and " + weather3 +" "+ "<br/><img src='" + icon3 + "'/><br/>"+
                    "In four hours " + temp4 + " &deg; F and " + weather4 +" "+ "<br/><img src='" + icon4 + "'/><br/>"+
                    "In five hours " + temp5 + " &deg; F and " + weather5 +" "+ "<br/><img src='" + icon5 + "'/><br/>"
                }
                // $scope.currentIcon = {
                //     html: "<img src='" + icon0 + "'/>"
                // }

            })
        }
        $scope.abbrState = function (input, to) {
            var states = [
                ['Arizona', 'AZ'],
                ['Alabama', 'AL'],
                ['Alaska', 'AK'],
                ['Arizona', 'AZ'],
                ['Arkansas', 'AR'],
                ['California', 'CA'],
                ['Colorado', 'CO'],
                ['Connecticut', 'CT'],
                ['Delaware', 'DE'],
                ['Florida', 'FL'],
                ['Georgia', 'GA'],
                ['Hawaii', 'HI'],
                ['Idaho', 'ID'],
                ['Illinois', 'IL'],
                ['Indiana', 'IN'],
                ['Iowa', 'IA'],
                ['Kansas', 'KS'],
                ['Kentucky', 'KY'],
                ['Kentucky', 'KY'],
                ['Louisiana', 'LA'],
                ['Maine', 'ME'],
                ['Maryland', 'MD'],
                ['Massachusetts', 'MA'],
                ['Michigan', 'MI'],
                ['Minnesota', 'MN'],
                ['Mississippi', 'MS'],
                ['Missouri', 'MO'],
                ['Montana', 'MT'],
                ['Nebraska', 'NE'],
                ['Nevada', 'NV'],
                ['New Hampshire', 'NH'],
                ['New Jersey', 'NJ'],
                ['New Mexico', 'NM'],
                ['New York', 'NY'],
                ['North Carolina', 'NC'],
                ['North Dakota', 'ND'],
                ['Ohio', 'OH'],
                ['Oklahoma', 'OK'],
                ['Oregon', 'OR'],
                ['Pennsylvania', 'PA'],
                ['Rhode Island', 'RI'],
                ['South Carolina', 'SC'],
                ['South Dakota', 'SD'],
                ['Tennessee', 'TN'],
                ['Texas', 'TX'],
                ['Utah', 'UT'],
                ['Vermont', 'VT'],
                ['Virginia', 'VA'],
                ['Washington', 'WA'],
                ['West Virginia', 'WV'],
                ['Wisconsin', 'WI'],
                ['Wyoming', 'WY'],
            ];

            if (to == 'abbr'){
                input = input.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
                for(i = 0; i < states.length; i++){
                    if(states[i][0] == input){
                        $scope.abbreviation =states[i][1];
                    }
                }
            } else if (to == 'name'){
                input = input.toUpperCase();
                for(i = 0; i < states.length; i++){
                    if(states[i][1] == input){
                        $scope.fullStateName = states[i][0];
                    }
                }
            }
        }

    });
