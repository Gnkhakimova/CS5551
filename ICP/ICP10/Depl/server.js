/**
 * Created by user on 23/10/2016.
 */

var assert = require('assert');
var bodyParser = require("body-parser");
var express = require('express');
var cors = require('cors');
var Clarifai = require('clarifai');
var app = express();

var resultF = "";
var port = process.env.PORT || 8080;



app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/predict', function (req, res) {
    var app1 = new Clarifai.App({apiKey: '93d21301af8945f88c033198ca19e919'});
        var url = req.query.image;

    var colorNameArray = new Array;

    app1.models.predict("eeed0b6733a644cea07cf4c60f87ebb7", url).then(
        function(response) {
            var capsule = response['outputs'];
            var dataPacket = capsule[0]['data'];
            var colorPacket = dataPacket['colors'];
            packetLength = colorPacket.length;
            for(var jj = 0; jj< packetLength; jj++){
                var w3cPacket = colorPacket[jj]['w3c'];
                colorNameArray.push(w3cPacket['name']);


            }
            if(colorNameArray.length != 0){
                res.status(200).send(colorNameArray);
            }
            console.log(colorNameArray);

        },
        function(err) {
            console.log(err);
        })

})


app.listen(port, function() {
	console.log('app running')
})
