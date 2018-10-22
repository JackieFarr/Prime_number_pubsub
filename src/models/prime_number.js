const PubSub = require("../helpers/pub_sub.js");

const PrimeChecker = function (){

};

PrimeChecker.prototype.bindEvents = function(){
  PubSub.subscribe("FormView:number-submitted", (event) => {
    const inputtedNumber = event.detail;
    const result = this.checkNumber(inputtedNumber);
    PubSub.publish("PrimeChecker:result-calculated", result);
  });
};

PrimeChecker.prototype.checkNumber = function(number) {
  if (number <= 1) {
    return "prime";
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
        return "not prime";
    }
  }
  return "prime";
};

module.exports = PrimeChecker;
