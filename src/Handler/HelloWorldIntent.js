'use strict';

const HelloWorldIntentHandler = function () {
    this.emit(':tell', 'Willkommen beim AraCom-<phoneme alphabet="ipa" ph="ˈhæ-kɐrˌ-thɔn">hackathon</phoneme>!');
};

module.exports = HelloWorldIntentHandler;