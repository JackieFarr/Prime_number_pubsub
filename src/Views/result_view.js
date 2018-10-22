const PubSub = require("../helpers/pub_sub.js");
const ResultView = function (){

};

ResultView.prototype.bindEvents = function () {
  PubSub.subscribe("PrimeChecker:result-calculated", (event) => {
    const primeNumber = event.detail;
    this.displayResult(primeNumber);
  });
};

ResultView.prototype.displayResult = function (result) {
  const resultElement = document.querySelector("#result");
  resultElement.textContent = `The number is ${result}.`;
};
module.exports = ResultView;
