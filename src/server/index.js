var path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');
const app = express()
const aylien = require("aylien_textapi");
const dotenv = require('dotenv').config();

var textapi = new aylien({
    application_id: process.env.application_id,
    application_key: process.env.application_key
});
// configure express to use body-parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cors());
app.use(express.static('dist'))




app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

app.post('/sentimentText', function (req, res) {
    let appData = {};
    let textContent = req.body.text;
    textapi.sentiment({'text': textContent}, (error, response) => { 
        // Callback function will run after
        // this line just test with text sometime
        console.log(response,error);
        error ? (appData = error) : (appData = response)
        res.send(appData);
    })
   
})

app.post('/sentimentUrl', function (req, res) {
    let appData = {};
    let textContent = req.body.text;
    
    textapi.sentiment({'url': textContent,
        'mode': 'document'}, (error, response) => { 
        // Callback function will run after
        // this line just test with text sometime
        console.log(response,error);
        error ? (appData = error) : (appData = response)
        res.send(appData);
    })
   
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})


