//should require the other two modules
//The first function export should return the result of the first module being passed into the second module.
// The second function export should return the text “Account balance: \n”.

var randomNumber = require('./module-one.js');

var convertValue = require('./module-two.js');




module.exports = {
  sushi: convertValue(randomNumber(100, 1000000)),
  tapas: 'Account balance:\n $'
};
