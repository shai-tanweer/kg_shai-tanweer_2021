/**
 * Returns an array of digit converted into string format
 *
 * @param {number} number The number to convert.
 * @return {string []} array of digits.
 */
var getDigits = function (number) {
    return number.toString().split("");
  };

/**
 * Returns the phonetic character of a digit
 *
 * @param {string} digit The string digit to convert.
 * @return {string} phonetic character of a digit
 */
var getPhoneticForDigit = function (digit) {
    switch (digit) {
      case "0":
        return "Zero";
        break;
      case "1":
        return "One";
        break;
      case "2":
        return "Two";
        break;
      case "3":
        return "Three";
        break;
      case "4":
        return "Four";
        break;
      case "5":
        return "Five";
        break;
      case "6":
        return "Six";
        break;
      case "7":
        return "Seven";
        break;
      case "8":
        return "Eight";
        break;
      case "9":
        return "Nine";
        break;
      default:
        return "";
    }
};

var result = [];
process.argv.slice(2).forEach(function (number) {
   // get digits of the number
   var digits = getDigits(number);
   // get the phonetic of the digit
   var phonetics = "";
   digits.forEach(function (digit) {
     var phonetic = getPhoneticForDigit(digit);
     phonetics += phonetic;
   });
   // add phonetic characters of numbers in result
   result.push(phonetics);
});
console.log(result.join(','));