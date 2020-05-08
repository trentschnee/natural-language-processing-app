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

app.post('/sentiment', function (req, res) {

    let nameURL = req.body
    console.log(nameURL)
    res.send(nameURL)
    // res.send(mockAPIResponse)
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})


