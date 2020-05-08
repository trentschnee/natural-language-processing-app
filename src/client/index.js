import { checkForName } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'
const dotenv = require('dotenv');

var aylien = require("aylien_textapi");
var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
    });
console.log(checkForName);

alert("I EXIST")
console.log("CHANGE!!");
