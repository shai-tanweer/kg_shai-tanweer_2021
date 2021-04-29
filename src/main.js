var getDigits = function (number) {
    return number.toString().split("");
  };
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
var arr = [21,321,4,100];
arr.forEach(function (number) {
   // get digits of the number
   var digits = getDigits(number);
   // get the phonetic of the digit
   var phonetics = "";
   digits.forEach(function (digit) {
     var phonetic = getPhoneticForDigit(digit);
     phonetics += phonetic;
   });
   result.push(phonetics);
});
console.log(result);