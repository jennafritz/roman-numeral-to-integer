function romanNumeral(string) {
  // type your code here
  let numerals = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
  }

  // After or Equal Larger is Added
    // if the element is larger than or equal to the next element, add them together
  // Before Larger is Subtracted
    // if the element is smaller than the next element, subtract it from the next
  // cannot subtract more than one number
  // cannot add more than three of the same number 

  let value = 0

  if(string.length <= 1){
    return numerals[string[0]]
  }

  let i = 0
  while(i < string.length){
    if(i === (string.length - 1)){
      value += numerals[string[i]]
      i++
    }
    if(numerals[string[i]] >= numerals[string[i + 1]]){
      value += numerals[string[i]]
      i++
    }
    if(numerals[string[i]] < numerals[string[i + 1]]){
      difference = numerals[string[i + 1]] - numerals[string[i]]
      value += difference
      i = i + 2
    }
  }

  return value
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 1");
  console.log(romanNumeral('I'));

  console.log("Expecting: 1984");
  console.log(romanNumeral('MCMLXXXIV'))

  console.log("Expecting: 9");
  console.log(romanNumeral('IX'));

  console.log("Expecting: 2012");
  console.log(romanNumeral("MMXII"))

  console.log("Expecting: 402");
  console.log(romanNumeral('CDII'));
}

module.exports = romanNumeral;

// Please add your pseudocode to this file
  // create POJO of roman numerals characters with associated values
  // establish value variable, initially equal to 0
  // if string is one or fewer characters
    // return roman numeral value of character
  // otherwise, set counter variable to 0
  // loop through string while counter variable is less than length of string
    // if it's exactly the last element
      // add it to the value
    // if the current element is greater than or equal to the next
      // add the current element to the value
      // increment the counter by 1
    // if the current element is less than the next
      // subtract its value from the next one
      // add the difference to the value variable
      // increment the counter by 2 (to skip the subtracted-from element)
    // return the value
// And a written explanation of your solution
