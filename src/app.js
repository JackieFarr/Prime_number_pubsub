const FormView = require("./views/form_view.js");
const PrimeChecker = require("./models/prime_number.js");
const ResultView = require("./views/result_view.js");

document.addEventListener('DOMContentLoaded', () => {
  const formView = new FormView();
  formView.bindEvents();
  // console.log('JavaScript Loaded');

  const primeChecker = new PrimeChecker();
  primeChecker.bindEvents();

  const resultView = new ResultView();
  resultView.bindEvents();
});
