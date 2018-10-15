
var express = require('express');
var app = express();
var request = require('request');
var cors = require('cors');
app.use(cors({origin: 'http://localhost:63342'}));

app.get('/getPlace', function (req, res) {

    var result={
        'city': []
    };

    var location = req.query.city;
   // var state = req.query.state;
    var url = "https://restcountries.eu/rest/v2/capital/"+location;

    request(url, function (error, response, body) {
        //Check for error
        if (error) {
            return console.log('Error:', error);
        }

        //Check for right status code
        if (response.statusCode !== 200) {
            return console.log('Invalid Status Code Returned:', response.statusCode);
        }
        //All is good. Print the body
        body = JSON.parse(body);
        var info = body[0].name;

            result.city.push({
                'Name': info[0].name,
                'Flag': info[0].flag,
                'Subregion': info[0].subregion,
                'Language': info[0].languages[0].name
            });
        //}
    });

    console.log(result);


});

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})