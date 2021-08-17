def roman_numeral(string)
  # type your code in here
  numerals = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
  }

  if string.length <= 1
    return numerals[string[0].to_sym]
  end

  value = 0

  i = 0
  while i < string.length do
    if i == (string.length - 1)
      value += numerals[string[i].to_sym]
      i = i + 1
    elsif numerals[string[i].to_sym] >= numerals[string[i + 1].to_sym]
      value += numerals[string[i].to_sym]
      i = i + 1
    elsif numerals[string[i].to_sym] < numerals[string[i + 1].to_sym]
      difference = numerals[string[i + 1].to_sym] - numerals[string[i].to_sym]
      value += difference
      i = i + 2
    end
  end

  return value
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 1"
  puts roman_numeral('I')

  puts "Expecting: 1984"
  puts roman_numeral('MCMLXXXIV')

  puts "Expecting: 9"
  puts roman_numeral('IX')

  puts "Expecting: 2012"
  puts roman_numeral('MMXII')

  puts "Expecting: 402"
  puts roman_numeral('CDII')

  # Don't forget to add your own!
end

# Please add your pseudocode to this file
  # create hash of roman numerals characters with associated values
  # establish value variable, initially equal to 0
  # if string is one or fewer characters
    # return roman numeral value of character
  # otherwise, set counter variable to 0
  # loop through string while counter variable is less than length of string
    # if it's exactly the last element
      # add it to the value
    # if the current element is greater than or equal to the next
      # add the current element to the value
      # increment the counter by 1
    # if the current element is less than the next
      # subtract its value from the next one
      # add the difference to the value variable
      # increment the counter by 2 (to skip the subtracted-from element)
    # return the value

# And a written explanation of your solution
