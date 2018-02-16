var Alexa = require('alexa-sdk');


var QuoteDataObj = {
                    Lincoln: [
                      "Whatever you are be a good one."
                    ],
                    Einstein: [
                      "Imagination is more important than knowledge",
                      "If the fact don't fit the theory, change the facts.",
                      "Life is like a riding a bicycle. To keep you balance you must keep moving"
                    ]
};


// a separate function that takes out the quote and returns the author and quote

function getQuoteFunction(author) {

  console.log("Getting into getQuoteFunction");

  // Get random author if author is not defined
  if (author === undefined) {
    var totalauthors = Object.keys(QuoteDataObj).length;
    var rand = Math.floor(Math.random() * totalauthors);

    // random author name
    author = Object.keys(QuoteDataObj)[rand];
  }

}


var handlers = {

    // When launched without any action
    'LaunchRequest': function () {
        console.log("Launch Request Intent Handler Called");
        this.emit(':tell', "Hello, I am Gillian! I am glad to meet you.");
    },
};

exports.handler = function(event, context, callback) {
    // alexa object via the alexa-sdk
    var alexa = Alexa.handler(event, context, callback);
    alexa.registerHandlers(handlers);
    alexa.execute();
};
