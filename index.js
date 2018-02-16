var Alexa = require('alexa-sdk');

var handlers = {

    // When launched without any action
    'LaunchRequest': function () {
        console.log("Launch Request Intent Handler Called");
        this.emit(':tell', "Hello, I am Gillian! I am glad to meet you.");
    },
};
