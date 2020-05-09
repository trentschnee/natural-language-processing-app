var path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');
const app = express()
const aylien = require("aylien_textapi");
const dotenv = require('dotenv');

var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});
// configure express to use body-parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cors());
app.use(express.static('dist'))




app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

app.post('/sentimentTest', function (req, res) {
    let appData = {};
    let textContent = req.body.text;

    console.log(textContent);
    textapi.sentiment({'text': 'John is a very good football player!'}, (error, response) => { 
        // Callback function will run after
        // this line just test with text sometime
        console.log(response,error);
        error ? (appData = error) : (appData = response)
        res.send(appData);
    })
   
    // res.send(mockAPIResponse)
})

app.get('/sentiment', function (req, res) {
    let appData = {};
    let nameURL = req.query.url;
    textapi.sentiment({ text: nameURL, mode: 'document' }, (error, response) => { 
        // Callback function will run after
        // this line just test with text sometime
        error !== true ? (appData = response) : (appData.error = error)
       
    })
    res.send(appData);
    // res.send(mockAPIResponse)
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})


